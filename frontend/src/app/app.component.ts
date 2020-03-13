import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { AuthenticationService } from "./_services";
import { User, Role } from "./_models";

import "./_content/app.less";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );

    iconRegistry.addSvgIcon(
      "logout",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/examples/logout.svg")
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
  dashboard() {
    this.router.navigate(["/dashboard"]);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  get isSponsor() {
    return this.currentUser && this.currentUser.role === Role.Sponsor;
  }
  get isDriver() {
    return this.currentUser && this.currentUser.role === Role.User;
  }
}
