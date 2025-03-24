import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email.trim() === '') {
      alert("Please enter a valid email.");
      return;
    }
  
    localStorage.setItem('userEmail', this.email);
    alert("Login successful!");
    location.reload(); 
    this.router.navigate(['/my-games']); 
  }
  
}
