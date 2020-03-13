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
  templateUrl: "register-sponsor.component.html",
  styleUrls: ["./register-sponsor.component.css"]
})
export class RegisterSponsorComponent implements OnInit {
  registerSponsorForm: FormGroup;
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
    this.registerSponsorForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(4)]],
      companyName: ["", Validators.required],
      role: [Role.Sponsor]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerSponsorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerSponsorForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .register(this.registerSponsorForm.value)
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
