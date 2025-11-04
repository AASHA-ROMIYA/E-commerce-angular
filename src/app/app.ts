import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './frontendUser/register/register';
import { Login } from './frontendUser/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-commerce-app');
}
