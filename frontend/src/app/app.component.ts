import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import DashboardComponent

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, DashboardComponent],  // Add DashboardComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-finance-tracker';

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      console.log(event);
    });
  }
}
