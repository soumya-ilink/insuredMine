import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from "@angular/material";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
    authService.loggedIn.subscribe(res => {
      this.loggedIn = res;
      this.username = localStorage.getItem('username');
    });
  }

  ngOnInit() { }
  public onToggleSidenav = () => {
  }
  LoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      backdropClass: "matModalPopupBackdrop",
      panelClass: "matSmallModal",
      disableClose: true,
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  logout() {
    this.authService.logout();
  }
}
