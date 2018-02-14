import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './signup/register/register.component';
import { UsersComponent } from './signup/users/users.component';

export const ROUTES: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
