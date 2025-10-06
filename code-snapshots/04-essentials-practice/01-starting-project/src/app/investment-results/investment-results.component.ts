import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { type InvestmentYearData } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  data = input<InvestmentYearData[]>();
}
