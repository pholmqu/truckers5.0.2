import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "src/app/_models";
import { UserService, AuthenticationService } from "src/app/_services";

@Component({ templateUrl: "view-user.component.html" })
export class ViewUserComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => (this.users = users));
  }
}
