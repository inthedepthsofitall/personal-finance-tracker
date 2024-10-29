import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [], // You can add imports here if using other modules
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css' ] // This should be styleUrls, not styleUrl
})
export class TrackerComponent {
  // Add your tracking logic and properties here
  expenses: { name: string, amount: number } [] = [];

  addExpense(name:string, amount: number) {
    this.expenses.push({ name, amount });
  }
}
