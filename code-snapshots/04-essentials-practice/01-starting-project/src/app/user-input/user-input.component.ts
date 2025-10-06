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
  static initialInvestmentDefault = '0';
  static annualInvestmentDefault = '0';
  static expectedReturnDefault = '5';
  static durationDefault = '10';

  initialInvestment = signal(UserInputComponent.initialInvestmentDefault);
  annualInvestment = signal(UserInputComponent.annualInvestmentDefault);
  expectedReturn = signal(UserInputComponent.expectedReturnDefault);
  duration = signal(UserInputComponent.durationDefault);

  calculate = output<InvestmentYearData[]>();

  onSubmit(): void {
    const results = calculateInvestmentResults(
      +this.initialInvestment(),
      +this.annualInvestment(),
      +this.expectedReturn(),
      +this.duration()
    );

    this.calculate.emit(results);

    // Reset input
    this.initialInvestment.set(UserInputComponent.initialInvestmentDefault);
    this.annualInvestment.set(UserInputComponent.annualInvestmentDefault);
    this.expectedReturn.set(UserInputComponent.expectedReturnDefault);
    this.duration.set(UserInputComponent.durationDefault);
  }
}
