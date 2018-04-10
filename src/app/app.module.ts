import { fakeBackendProvider } from './service/fake-backend.service';
import { AuthenticationService } from './service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { WallPageComponent } from './wall-page/wall-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BootstrapPanelComponent,
    HomePageComponent,
    SignUpPageComponent,
    ViewTaskComponent,
    WallPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomePageComponent},
      {path:'wallpage', component: WallPageComponent},
      {path:'viewtast', component: ViewTaskComponent},
      {path:'signup', component:SignUpPageComponent}
    ])
  ],
  providers: [
    AuthenticationService,

    //fake backend service implementation
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
