import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (!this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required!';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    // Store user credentials in localStorage
    const userData = { username: this.username, password: this.password };
    localStorage.setItem(this.username, JSON.stringify(userData));

    alert('Registration successful! You can now log in.');
    this.router.navigate(['/login']); // Redirect to login
  }
}
