import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { NbThemeModule } from '@nebular/theme';
//import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PageService } from './services/page.service';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    //NbLayoutModule,
    //NbSidebarModule,
    RouterModule.forRoot(appRoutes),
    //NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [
    PageService,
    Title,
    UserService
    //NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
