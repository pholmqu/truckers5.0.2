import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { AdminComponent } from "./admin";
import { DashboardComponent } from "./dashboard";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AlertComponent } from "./_components";
import { MatGridListModule } from "@angular/material/";
import { DriverDashComponent } from "./driver-dash/driver-dash.component";
import { SponsorDashComponent } from "./sponsor-dash/sponsor-dash.component";
import { AdminDashComponent } from "./admin-dash/admin-dash.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    //from angular materials
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AlertComponent,
    DriverDashComponent,
    SponsorDashComponent,
    AdminDashComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
