import { Component } from '@angular/core';

@Component({
  selector: 'open-calculator',
  templateUrl: 'eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss'],
})
export class EligibilityCalculator {
  public panelTitle = 'Eligibility Calculator';
  public monthlyIncomeText = 'Monthly Income';
  public monthlyExpenseText = 'Monthly Expense';
  public incomeSliderValue = 0;
  public expenseSliderValue = 0;
  public repaymentLabel = 'Repayment Tenure';
  public repaymentTenureOptions = [1, 3, 6, 9, 12];
  public existingLoanText = 'Do you have any existing loans?';
  public emiText = 'EMI of existing loan (optional)';
  public existingEMI: number = 0;
  public loanExists = true;
  public loanAmountText = 'Loan Amount';
  public calculatedEmiText = 'Your EMI will be';
  public calculatedEMIAmount: number = 0;

  constructor() {}

  public activateSlider(eve: any, value: string) {
    const parentElement = eve.target['parentElement'];
    const currentElement = eve;
    currentElement.target['style'].cursor = 'pointer';
    const parentBoundingRect = parentElement.getBoundingClientRect();
    const currentElementLeft = Number(
      currentElement.target['style'].left.split('px')[0]
    );
    if (
      parentBoundingRect.x <= currentElement.clientX &&
      currentElement.clientX <=
        parentElement.parentElement.clientWidth + parentBoundingRect.x
    ) {
      let xDiff = currentElement.clientX - parentBoundingRect.x;
      parentElement.style.width = xDiff + 'px';
      const incrementPerPixel =
        Math.ceil(
          (value === 'income' ? 200000 : 300000) /
            parentElement.parentElement.clientWidth
        ) *
        (currentElementLeft + 3);
      if (currentElementLeft + 5 < xDiff + parentBoundingRect.x) {
        if (value === 'income') {
          this.incomeSliderValue = 100000 + incrementPerPixel;
        } else {
          this.expenseSliderValue = incrementPerPixel;
        }
      } else if (
        parentBoundingRect.x +
          Number(parentElement.style.width.split('px')[0]) >
        currentElement.clientX
      ) {
        if (value === 'income') {
          this.incomeSliderValue -= incrementPerPixel;
        } else {
          this.expenseSliderValue -= incrementPerPixel;
          this.expenseSliderValue =
            this.expenseSliderValue < 0
              ? this.expenseSliderValue * -1
              : this.expenseSliderValue;
        }
      }
      currentElement.target['style'].left =
        xDiff - currentElement.target['style'].width - 5 + 'px';
    }
  }
  public isExistingLoan(eve: any) {
    this.loanExists = eve.target['checked'];
  }
}
