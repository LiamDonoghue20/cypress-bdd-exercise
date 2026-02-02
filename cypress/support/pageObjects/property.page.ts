class DetailsPage {
  
   buttons = {
     continue: () => cy.get('[data-testid="getMyQuote"]'),
   }

}

export default new DetailsPage();
