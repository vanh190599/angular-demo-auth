import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TestUiComponent} from "./test-ui/test-ui.component";
import {NgxPermissionsGuard} from "ngx-permissions";
import {ForbiddenComponent} from "./forbidden/forbidden.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
