import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent} from './welcome-page/welcome-page.component'
import { AuthComponent } from './auth/auth.component';
import { SignComponent } from './sign/sign.component';
import { RegistrationComponent} from './registration/registration.component'
import { AuthErrorComponent} from './auth-error/auth-error.component'
import { MainPageComponent} from './main-page/main-page.component'

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent},
  {
    path: 'auth', component: AuthComponent,
    children: [
    {path: 'sign_in', component: SignComponent},
    {path: 'registration', component:RegistrationComponent},
    {path: 'error', component: AuthErrorComponent}
    ]
  },
  {path: 'MainPage', component: MainPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
