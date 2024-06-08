import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TestUiComponent} from "./test-ui/test-ui.component";
import {NgxPermissionsGuard} from "ngx-permissions";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {Screen1Component} from "./screen1/screen1.component";
import {Screen2Component} from "./screen2/screen2.component";
import {AppLayoutComponent} from "./layout/app.layout.component";


const routes: Routes = [
  {
    path: 'screen1',
    component: Screen1Component,
  },
  {
    path: 'screen2',
    component: Screen2Component,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'EDITOR'],
        except: ['GUEST'],
        redirectTo: {
          ADMIN: 'forbidden',
          EDITOR: 'forbidden',
          default: 'login'
        },
      }
    }
  },
  {
    path: 'test-ui',
    component: TestUiComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // do something
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
