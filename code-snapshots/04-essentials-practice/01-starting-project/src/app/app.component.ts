import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentYearData } from './investment-results/investment-results.model';
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
})
export class AppComponent {
  investmentResults?: InvestmentYearData[];

  onCalculate(results: InvestmentYearData[]): void {
    this.investmentResults = results;
  }
}
