import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SignupComponent,LoginComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports :[SignupComponent,LoginComponent]
})
export class AccountsModule { }
