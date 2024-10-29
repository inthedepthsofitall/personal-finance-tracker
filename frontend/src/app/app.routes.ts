import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { EducationComponent } from './components/education/education.component'; 
export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to Dashboard on load
    { path: 'dashboard', component: DashboardComponent }, // Corrected to point to DashboardComponent
    { path: 'tracker', component: TrackerComponent },
    { path: 'education', component: EducationComponent },
    // Add other routes here as needed
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }