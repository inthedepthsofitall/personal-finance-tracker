import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tabs: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'Education', path: '/education' },
  ];

  constructor() {
    console.log("Tabs: ", this.tabs); // Check if tabs are being set correctly
  }

  logLinkClick(tabName: string) {
    console.log(`Navigating to: ${tabName}`);
  }
}
