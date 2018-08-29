import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template/template-driven-form.component';
import { ModelDrivenFormComponent } from './template/model-driven-form.component';
import { LoginformComponent } from './login-form/loginform/loginform.component';
import { DashboardComponent } from './dash-board/dashboard/dashboard.component';
import { UserServiceService } from './user/user-service.service';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    LoginformComponent,
    DashboardComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
