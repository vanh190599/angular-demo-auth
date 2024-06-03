import {Component, OnInit} from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'auth-demo';

  date1: Date | undefined;

  date2: Date | undefined;

  date3: Date | undefined;

  constructor(private permissionsService: NgxPermissionsService) {
  }

  ngOnInit(): void {
    const perm = ["ADMIN1", "EDITOR"];

    this.permissionsService.loadPermissions(perm);

    // this.http.get('url').subscribe((permissions) => {
    //   //const perm = ["ADMIN", "EDITOR"]; example of permissions
    //   this.permissionsService.loadPermissions(permissions);
    // })
  }

}
