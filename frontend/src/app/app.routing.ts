import { Routes, RouterModule } from "@angular/router";

import { ViewUserComponent } from "./view-user";
import { DashboardComponent } from "./dashboard";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AuthGuard } from "./_helpers";

const routes: Routes = [
  { path: "view-user", component: ViewUserComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "dashboard" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
