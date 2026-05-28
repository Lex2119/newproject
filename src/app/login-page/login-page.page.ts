import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: false
})
export class LoginPagePage implements OnInit {

  @ViewChild('content', { static: false }) content!: IonContent;

  username: string = '';
  password: string = '';
  showError: boolean = false; 

  constructor(private router: Router) { }

  LoginClick(){
    if(this.username == 'user' && this.password == '123') {
      this.showError = false;
      this.router.navigate(['/home-page']);
    } else {
      this.showError = true; 
    }
  }

  ngOnInit() {
  }

}