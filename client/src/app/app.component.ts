import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'Dating App Client';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:5151/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.error(error),
      complete: () => console.log('Request has completed.')

    })
  }

}
