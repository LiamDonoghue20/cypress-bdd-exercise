class ApplicantPage {
  
   buttons = {
    next: () => cy.get('[data-testid="next-button"]')
   }


}

export default new ApplicantPage();
