import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: false
})
export class LoginPagePage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  LoginClick(){

    if(this.username == 'user' && this.password == '123')
    {
      this.router.navigate(['/home-page']);
    }
    else
    {
      alert('Wrong username or password');
    }

  }


  ngOnInit() {
  }

}
