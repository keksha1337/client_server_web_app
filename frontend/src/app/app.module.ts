import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AddMemesComponent } from './add-memes/add-memes.component';
import { HttpClientModule } from '@angular/common/http';
import { GetMemesComponent } from './get-memes/get-memes.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthComponent } from './auth/auth.component';
import { SignComponent } from './sign/sign.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthErrorComponent } from './auth-error/auth-error.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemesComponent,
    GetMemesComponent,
    WelcomePageComponent,
    AuthComponent,
    SignComponent,
    RegistrationComponent,
    AuthErrorComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
