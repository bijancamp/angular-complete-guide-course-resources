import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentYearData } from '../investment-results/investment-results.model';
import { calculateInvestmentResults } from '../investment-results/investment-results.utility';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  calculate = output<InvestmentYearData[]>();

  onSubmit(): void {
    const results = calculateInvestmentResults(
      this.initialInvestment(),
      this.annualInvestment(),
      this.expectedReturn(),
      this.duration()
    );

    this.calculate.emit(results);
  }
}
