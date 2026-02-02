class QuotePage {
  
   buttons = {
    amendCover: () => cy.get('[data-testid="amend-cover-button"]'),
    addonButton: (addonName) => cy.get(`[data-testid=${addonName}]`),
    refreshQuotes: () => cy.get('[data-testid="refresh-quotes-button"]'),
    apply: () => cy.get('[data-testid="apply-button"]')
   };

   containers ={
      quoteAmount: () => cy.get('#monthly-premiums')
   }

   addAddon(addonName){
      this.buttons.apply().should('be.visible');
      let initialAmount: number;
      this.containers.quoteAmount().invoke('text').then((text) => {
         // Debug: log the text for troubleshooting
         cy.log('Quote text:', text);
         // Try to extract the last £ amount in the string
         const matches = text.match(/£([\d,.]+)/g);
         let amountStr = null;
         if (matches && matches.length > 0) {
           amountStr = matches[matches.length - 1].replace('£', '');
         }
         initialAmount = amountStr ? parseFloat(amountStr.replace(/,/g, '')) : NaN;
      });
      this.buttons.amendCover().click();
      this.buttons.addonButton(addonName).click();
      this.buttons.refreshQuotes().click();
      this.buttons.apply().should('be.visible');
      this.containers.quoteAmount().invoke('text').then((text) => {
         cy.log('Quote text after:', text);
         const matches = text.match(/£([\d,.]+)/g);
         let amountStr = null;
         if (matches && matches.length > 0) {
           amountStr = matches[matches.length - 1].replace('£', '');
         }
         const newAmount = amountStr ? parseFloat(amountStr.replace(/,/g, '')) : NaN;
         expect(newAmount).to.be.greaterThan(initialAmount);
      });
   }
}

export default new QuotePage();
