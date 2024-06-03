import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPermissionsModule, NgxPermissionsService} from "ngx-permissions";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TestUiComponent } from './test-ui/test-ui.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TestUiComponent,
    ForbiddenComponent,
    Screen1Component,
    Screen2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    Button,
    CalendarModule,
    FormsModule,
    TableModule,
    TagModule,
    CheckboxModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
