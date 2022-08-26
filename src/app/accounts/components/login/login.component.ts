import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { LoggerService } from 'src/app/Services/LoggerService';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // _logger?:LoggerService
  // constructor(logger:LoggerService) {
  //   this._logger=logger;
  //   this._logger.Logmessage("Hello from Login component constructor called");
  //  }

  constructor(private RouterService:Router){

  }

  Username:string="";
  Username1:string="";
  Password:string="";
  Password1:string="";
  LoginSuccess:string="";
  Email:string="";

  ngOnInit(): void {
  }
  Login()
  {
    if(this.Username=="Abc"&& this.Password=="123")
    {
      this.LoginSuccess="Passed";
    }
    else
    {
      this.LoginSuccess="Failed";
    }
  }
  CLear()
  {
    this.Username="";
    this.Password="";
    this.LoginSuccess="";
  }

  login1(form:FormGroup)
  {
    this.Username="Test";
    console.log(form);
    if(form.valid)
    {
      // Redirect Logic
    //  this.router.navigate(['./signup']);
    //alert()
    this.RouterService.navigate(['/main',this.Username]);
    }
  }
  ClearAll(form:FormGroup)
  {
      this.Username1="";
      this.Password1="";
      this.Email="";
  }
}
