import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'; 
import { TrackerComponent } from './components/tracker/tracker.component';
import { EducationComponent } from './components/education/education.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tracker', component: TrackerComponent },
    { path: 'education', component: EducationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
