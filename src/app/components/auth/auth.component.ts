import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private _apiService  :ApiService,
     private _snackbar : SnackbarService,
     private _router : Router) { }
  allreadyHaveAccount: boolean = false;
  ngOnInit(): void {
  }

  onSignUp(f:NgForm) {
  
  }
  onLogin(f:NgForm) {
   
   }
  }

