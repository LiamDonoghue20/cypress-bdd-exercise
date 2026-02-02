import testData from '../testData.json';

class DetailsPage {
  
   buttons = {
    selectAddress: (index: number) => cy.get(`#risk-address-li-${index}`)
   };

   inputFields = {
    riskAddress: () => cy.get('[id="risk-address-input"]'),
   };

   fillAddressDetails(){
     this.inputFields.riskAddress().type(testData.applicant.postcode);
     this.buttons.selectAddress(0).click();
     cy.contains('Success!').should('be.visible');
   }


}

export default new DetailsPage();
