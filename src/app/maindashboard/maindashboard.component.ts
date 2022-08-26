import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  name?:string |null;
  constructor(private route: ActivatedRoute) { 
    alert();
    this.route.paramMap.subscribe(params =>{ this.name=params.get('activateuser')})
   // console.log(this.route.snapshot.paramMap.get('Username'));
   console.log(this.name);
    console.log(this.route.paramMap.subscribe(params =>{ params.get('activateuser')}));
  }

  ngOnInit(): void {
  }

}
