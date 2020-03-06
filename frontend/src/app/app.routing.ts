import { Routes, RouterModule } from "@angular/router";

<<<<<<< HEAD
import { ViewUserComponent } from "./view-user";
=======
import { HomeComponent } from "./home";
import { AdminComponent } from "./admin";
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1
import { DashboardComponent } from "./dashboard";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AuthGuard } from "./_helpers";
import { Role } from "./_models";

const routes: Routes = [
<<<<<<< HEAD
  { path: "view-user", component: ViewUserComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
=======
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "dashboard" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
