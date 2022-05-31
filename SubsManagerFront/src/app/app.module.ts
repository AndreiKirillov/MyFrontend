import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { AddSubComponent } from './add-sub/add-sub.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';

const appRoutes: Routes =[
  { path: 'login', component: LoginPageComponent },
  {
    path: 'subscriptions',
    component: SubscriptionComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'add', component: AddSubComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscriptionComponent,
    LoginPageComponent,
    NotFoundComponent,
    AddSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
