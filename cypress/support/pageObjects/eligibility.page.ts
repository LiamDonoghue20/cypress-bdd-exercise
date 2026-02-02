class EligibilityPage {
  
   buttons = {
    agree: () => cy.get('[data-testid="agree-button"]'),
    agreeInsured: () => cy.get('[data-testid="agree-button"]'),
    agreeResident: () => cy.get(""),
    back: () => cy.get(""),
    next: () => cy.get('[data-testid="eligibility-next-button"]'),
   }

   agreeEligibility(){
      this.buttons.agree().each(($el) => {
         cy.wrap($el).click();
      });
      this.buttons.next().click();
   }


}

export default new EligibilityPage();
