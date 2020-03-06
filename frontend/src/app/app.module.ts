import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
<<<<<<< HEAD
import { ViewUserComponent } from "./view-user";
=======
import { HomeComponent } from "./home";
import { AdminComponent } from "./admin";
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1
import { DashboardComponent } from "./dashboard";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AlertComponent } from "./_components";
<<<<<<< HEAD
import { DriverDashComponent } from './driver-dash/driver-dash.component';
import { SponsorDashComponent } from './sponsor-dash/sponsor-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MaterialModule } from './material.module';
=======
import { MatGridListModule } from "@angular/material/";
import { DriverDashComponent } from "./driver-dash/driver-dash.component";
import { SponsorDashComponent } from "./sponsor-dash/sponsor-dash.component";
import { AdminDashComponent } from "./admin-dash/admin-dash.component";
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ViewUserComponent,
=======
    HomeComponent,
    AdminComponent,
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AlertComponent,
<<<<<<< HEAD
    DriverDashComponent ,
    SponsorDashComponent ,
=======
    DriverDashComponent,
    SponsorDashComponent,
>>>>>>> 43fef5fe5238ba00866d638828b61703ca92d2a1
    AdminDashComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
