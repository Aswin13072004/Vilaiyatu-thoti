import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password!';
      return;
    }

    const userData = localStorage.getItem(this.username);
    if (!userData) {
      this.errorMessage = 'User not found! Please register.';
      return;
    }

    const user = JSON.parse(userData);
    if (user.password !== this.password) {
      this.errorMessage = 'Incorrect password!';
      return;
    }

    localStorage.setItem('currentUser', this.username); // Store logged-in user
    alert('Login successful!');
    this.router.navigate(['/games']); // Redirect to game list
  }
}
