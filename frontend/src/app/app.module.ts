import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from './app.component';
import { TrackerComponent } from './components/tracker/tracker.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { EducationComponent } from './components/education/education.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent, 
    DashboardComponent,
    EducationComponent, 
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatButtonModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
