import { Component } from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";
import {getUserPermission} from "../user-permission";

@Component({
  selector: 'app-test-ui',
  templateUrl: './test-ui.component.html',
  styleUrl: './test-ui.component.scss'
})
export class TestUiComponent {
  user_name: string = 'user_1';

  constructor(private ngxPermissionsService: NgxPermissionsService) {}

  ngOnInit() {
    this.checkPermission();
  }

  checkPermission() {
    this.ngxPermissionsService.loadPermissions(getUserPermission(this.user_name));
  }

  switchUser(user_name: string) {
    this.user_name = user_name;

    this.checkPermission();
  }
}
