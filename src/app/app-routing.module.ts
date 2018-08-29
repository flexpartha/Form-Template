import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template/template-driven-form.component';
import { ModelDrivenFormComponent } from './template/model-driven-form.component';
import { LoginformComponent } from './login-form/loginform/loginform.component';
import { DashboardComponent } from './dash-board/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'Template',
    component:TemplateDrivenFormComponent,
   // outlet: 'roTemplate'
  },
  {
    path:'Model',
    component:ModelDrivenFormComponent,
   // outlet: 'roTemplate'
  },
  {
    path:'loginForm',
    component:LoginformComponent,
   // outlet: 'roTemplate'
  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent,
    //outlet: 'roTemplate'
  },
  {
    path:'',
    redirectTo:'/Template',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
