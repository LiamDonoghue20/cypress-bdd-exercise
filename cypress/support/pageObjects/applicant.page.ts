import testData from '../testData.json';

class ApplicantPage {
  
   buttons = {
    title: (title) => cy.get('[data-testid="radio-button"]').contains(title),
    newQuote: () => cy.get('[data-testid="start-new-quote"]')
   }

   inputFields = {
    firstName: () => cy.get('[data-testid="applicant1-forenames"]'),
    lastName: () => cy.get('[data-testid="applicant1-surname"]'),
    dateOfBirth: () => cy.get('[data-testid="applicant1-date-of-birth"]'),
   }

   fillApplicantForm(){
     this.buttons.title('Mr').click();
     this.inputFields.firstName().type(testData.applicant.firstName);
     this.inputFields.lastName().type(testData.applicant.lastName);
     this.inputFields.dateOfBirth().type(testData.applicant.dateOfBirth);
     this.buttons.newQuote().click();
   }
}

export default new ApplicantPage();
