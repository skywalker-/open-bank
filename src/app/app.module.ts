import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header-component';
import { EligibilityCalculator } from './components/eligibility-calculator/eligibility-calculator.component';
import { ResourceService } from './services/resource-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EligibilityCalculator],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
