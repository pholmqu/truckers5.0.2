import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Role } from "src/app/_models";

import {
  AlertService,
  UserService,
  AuthenticationService
} from "src/app/_services";

@Component({
  templateUrl: "register-admin.component.html",
  styleUrls: ["./register-admin.component.css"]
})
export class RegisterAdminComponent implements OnInit {
  registerAdminForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit() {
    this.registerAdminForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(4)]],
      companyName: ["-"],
      role: [Role.Admin]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerAdminForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerAdminForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .register(this.registerAdminForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
