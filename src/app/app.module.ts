import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { ChildNavbarComponent } from './child-navbar/child-navbar.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { AddressComponent } from './address/address.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectiveDemoDirective } from './Custom-Directive/directive-demo.directive';
import { CustmDiectiveDemoComponent } from './custm-diective-demo/custm-diective-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    SearchComponent,
    FilterPipePipe,
    HomeComponent,
    NavbarComponent,
    UserListComponent,
    RegistrationFormComponent,
    LoginComponent,
    ChildNavbarComponent,
    BasicDetailsComponent,
    AddressComponent,
    QualificationComponent,
    SignUpComponent,
    DirectiveDemoDirective,
    CustmDiectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
