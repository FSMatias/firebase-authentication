import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
// import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // User can login to the app
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }, // User can register to the app
  // TODO: { path: 'home', component: HomeComponent,  resolve: { data: UserResolver}} // User only has access to this page when logged in
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
