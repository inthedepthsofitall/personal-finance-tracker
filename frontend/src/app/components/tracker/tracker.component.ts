// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-tracker',
//   standalone: true,
//   imports: [CommonModule], // Import CommonModule for ngFor
//   templateUrl: './tracker.component.html',
//   styleUrls: ['./tracker.component.css']
// })
// export class TrackerComponent {
//   expenses: { name: string, amount: number }[] = [];

//   addExpense(name: string, amount: number) {
//     this.expenses.push({ name, amount });
//   }
// }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { RouterModule } from '@angular/router'; 

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, RouterModule], // Importing CommonModule and RouterModule
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   tabs = [
//     { name: 'Home', path: '/' },
//     { name: 'Tracker', path: '/tracker' },
//     { name: 'Education', path: '/education' },
//     // Add more tabs as needed
//   ];
// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent {
  expenses: { name: string, amount: number }[] = [];

  addExpense(name: string, amount: number) {
    this.expenses.push({ name, amount });
  }

  tabs = [
    { name: 'Home', path: '/' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'Education', path: '/education' },
    // Add more tabs as needed
  ];
}
