import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User, Role } from "src/app/_models";
import { UserService, AuthenticationService } from "src/app/_services";

@Component({ templateUrl: "dashboard.component.html" })
export class DashboardComponent implements OnInit {
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

  //   deleteUser(id: number) {
  //     this.userService
  //       .delete(id)
  //       .pipe(first())
  //       .subscribe(() => this.loadAllUsers());
  //   }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => (this.users = users));
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  get isDriver() {
    return this.currentUser && this.currentUser.role === Role.User;
  }
  get isSponsor() {
    return this.currentUser && this.currentUser.role === Role.Sponsor;
  }
}
