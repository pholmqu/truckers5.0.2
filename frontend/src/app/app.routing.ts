import { Routes, RouterModule } from "@angular/router";

import { ViewUserComponent } from "./view-user";
import { DashboardComponent } from "./dashboard";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { RegisterAdminComponent } from "./register-admin";
import { RegisterSponsorComponent } from "./register-sponsor";
import { AuthGuard } from "./_helpers";

const routes: Routes = [
  { path: "view-user", component: ViewUserComponent, canActivate: [AuthGuard] },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "register-admin", component: RegisterAdminComponent },
  { path: "register-sponsor", component: RegisterSponsorComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "dashboard" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
