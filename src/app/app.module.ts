import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HcuComponent } from './hcu/hcu.component';
import { HousingComponent } from './housing/housing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentSupportComponent } from './student-support/student-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HcuComponent,
    HousingComponent,
    StudentSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
