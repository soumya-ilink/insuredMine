import { Component, OnInit, Inject, Optional, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Subscription } from 'rxjs';

import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  fromPage: any;
  fromDialog: any;
  isSubmitted: boolean = false;
  showPassword = false;
  loginForm: FormGroup;
  invalidCreds:boolean=false;
  private _pageSub$: Subscription[] = [];

  public set pageSub$(value: Subscription) {
    this._pageSub$.push(value);
  }
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.fromPage = data.message;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required,
      Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(5)]]
    });
  }

  get controls(): any {
    return this.loginForm.controls;
  }
  closeTCModal() {
    this.dialogRef.close({ event: 'close', data: null });
  }
  checkCredentials(credentialsObject) {
    let userCreds = {
      emailId: credentialsObject.emailId,
      password: credentialsObject.password
    }
   this.pageSub$ =  this.authService.checkCredentials(userCreds).subscribe((res) => {
     if(res == true){
       this.invalidCreds = false;
       this.closeTCModal();
       this.authService.logIn(userCreds.emailId);
     }else{
       this.invalidCreds = true
     }
    })
  }
  ngOnDestroy(): void {
    try {
      this._pageSub$.forEach(sub => sub.unsubscribe());
    } catch (error) {
      console.log(error);

    }
  }
}

