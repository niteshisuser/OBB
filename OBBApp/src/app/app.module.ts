import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
