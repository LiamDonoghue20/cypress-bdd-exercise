import testData from '../testData.json';

class ApplicantPage {
  
   buttons = {
    startDateAgree: () => cy.get('[data-testid="has-start-date-yes"]'),
    clientVulnerabilitiesNo: () => cy.get('[data-testid="vulnerable-customer-no"]'),
    inbound: () => cy.get('[data-testid="source-inbound"]'),
    next: () => cy.get('[data-testid="next-button"]')
   };

   inputFields = {
    emailAddress: () => cy.get('[id="email-address"]'),
    telephoneNumber: () => cy.get('[id="telephone-number"]'),
    interestedParty: () => cy.get('[id="interested-parties"]'),
    mortageProvider: () => cy.get('[id="mortgage-provider"]'),
    thirdParty: () => cy.get('[data-testid="third-party-reference"]'),
   };

   fillApplicationPage(){
      this.buttons.startDateAgree().click();
      this.buttons.clientVulnerabilitiesNo().click();
      this.inputFields.emailAddress().type(testData.applicant.clientEmail);
      this.inputFields.telephoneNumber().type(testData.applicant.number);
      this.inputFields.interestedParty().type(testData.applicant.interestedPartyEmail);
      this.inputFields.mortageProvider().type(testData.applicant.mortgageProvider)
      this.inputFields.thirdParty().type(testData.applicant.thirdParty);
      this.buttons.inbound().click();
      this.buttons.next().click();
   }


}

export default new ApplicantPage();
