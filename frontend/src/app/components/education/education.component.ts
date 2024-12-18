import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-education',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  tabs = [
    { name: 'Home', path: '/' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'Education', path: '/education' },
  ];

  logLinkClick(tabName: string) {
    console.log(`Navigating to: ${tabName}`);
  }
}
