import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './Guard/login.guard';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { AddressComponent } from './address/address.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExitGuard } from './Guard/exit.guard';

const routes: Routes = [
  {path:"table", component:TableComponent},
  {path:"Home" , component:HomeComponent, children:[
    {path:"Basic-Details", component:BasicDetailsComponent},
    {path:"Address", component:AddressComponent},
    {path:"Qualification", component:QualificationComponent},
    {path:"SignUp", component:SignUpComponent},
    {path:"", redirectTo:"/Home/Basic-Details", pathMatch:"full"}
  ]},
  {path:"User-List", component:UserListComponent, canActivate:[LoginGuard]},
  {path:"RegistrationForm", component:RegistrationFormComponent, canDeactivate:[ExitGuard]},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/Home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
