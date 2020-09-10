import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'Your UserName';
  password = '';
  errorMessage = 'Invalid login credentials.';
  invalidLogin = false;

  //to use the router to the next page.
  //we use dependency injection
  constructor(
    private router: Router,
    private hardCodedAuthService: HardCodedAuthService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    // if(this.password === "test") {
    if (this.hardCodedAuthService.authenticate(this.username, this.password)) {
      //redirect to the welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
