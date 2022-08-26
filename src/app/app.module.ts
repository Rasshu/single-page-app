import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { HoverDirective } from './utility/directives/hover.directive';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AccountsModule,UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
