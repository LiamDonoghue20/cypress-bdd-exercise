import testData from '../testData.json';

class ApplicantPage {
  
   buttons = {
    choosePayment: (paymentOption) => cy.get(`[data-testid="${paymentOption}-option"]`),
    confirmAgreement: () => cy.get('[data-testid="confirmation-finance-agreement"]'),
    detailsCorrect: () => cy.get('[data-testid="confirmation-statement-of-insurance"]'),
    ipidProvided: () => cy.get('[data-testid="confirmation-ipid-policy-wording"]'),
    demandsMet: () => cy.get('[data-testid="confirmation-cover-meets-demands-and-needs"]'),
    makePayment: () => cy.get('[data-testid="make-payment-button"]'),
   }

   inputFields = {
    name: () => cy.get('[data-testid="account-holder-name"]'),
    accountNumber: () => cy.get('[data-testid="account-number"]'),
    sortCode: () => cy.get('[data-testid="sort-code"]'),
   }

   completePayment(paymentOption){
      this.buttons.choosePayment(paymentOption).click();
      this.inputFields.name().type(testData.applicant.firstName + ' ' + testData.applicant.lastName);
      this.inputFields.accountNumber().type(testData.bankDetails.accountNumber);
      this.inputFields.sortCode().type(testData.bankDetails.sortCode);
      if (paymentOption.toLowerCase() === 'monthly') {
         this.buttons.confirmAgreement().click();
      }
      this.buttons.detailsCorrect().click();
      this.buttons.ipidProvided().click();
      this.buttons.demandsMet().click();
      this.buttons.makePayment().click();
   }



}

export default new ApplicantPage();
