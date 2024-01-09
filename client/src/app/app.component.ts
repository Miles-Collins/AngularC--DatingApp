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
    this.http.get('http://localhost:5150/api/users').subscribe({
      next: (response) => {
        this.users = response
        console.log('[Users]', this.users);
      },
      error: error => console.error(error),
      complete: () => console.log('Request has completed.')

    })
  }

}
