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
  
  // 1. Track password visibility state
  showPassword: boolean = false; 

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.username = '';
    this.password = '';
    this.showError = false;
    this.showPassword = false; // Reset toggle on view entry
  }

  // 2. Flip the visibility state back and forth
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // 3. Trim username when the user clicks away / moves to the password field
  trimUsername() {
    if (this.username) {
      this.username = this.username.trim();
    }
  }

  blockPasswordSpaces(event: any) {
    // 1. Get the raw string value from the input field
    const inputEl = event.target;
    const inputVal = inputEl.value;

    if (inputVal) {
      // 2. Strip all spaces immediately
      const cleanVal = inputVal.replace(/\s+/g, '');
      
      // 3. Force BOTH the variable and the actual screen input value to match
      this.password = cleanVal;
      inputEl.value = cleanVal; 
    }
  }

  LoginClick(){
    this.trimUsername(); 
    
    if(this.username === 'user' && this.password === '123') {
      this.showError = false;
      this.router.navigate(['/home-page']);
    } else {
      this.showError = true; 
    }
  }

  ngOnInit() {
  }

}