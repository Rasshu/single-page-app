import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/components/login/login.component';
//import { LoginComponent } from './accounts/components/login/login.component';
import { SignupComponent } from './accounts/components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';

const routes: Routes = [
  // http://localhost:1200/
  {path:"",redirectTo:"home",pathMatch:'full'},
 // http://localhost/home
  {path:"home",component:HomeComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ]  
 },
// {path:"main",component:MaindashboardComponent},
 //{path:"signup",component:SignupComponent}
//,
 {path:"main/:activateuser",component:MaindashboardComponent}
// [{path:"projects",}]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
