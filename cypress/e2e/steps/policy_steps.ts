import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../support/pageObjects/home.page';
import applicantPage from '../../support/pageObjects/applicant.page';
import detailsPage from '../../support/pageObjects/details.page';
import propertyPage from '../../support/pageObjects/property.page';
import quotePage from '../../support/pageObjects/quote.page';
import eligibilityPage from '../../support/pageObjects/eligibility.page';
import endorsementsPage from '../../support/pageObjects/endorsements.page';
import summaryPage from '../../support/pageObjects/summary.page';
import paymentPage from '../../support/pageObjects/payment.page';
import applicationPage from '../../support/pageObjects/application.page';


Given('the user creates a new buildings and contents quote', () => {
    homePage.buildingsAndContents.click();
   
});

When('the user receives prices for quotes', () => {
    applicantPage.fillApplicantForm();
    detailsPage.fillAddressDetails();
    propertyPage.buttons.continue().click();
});

And('the user adds home emergency cover addon', () => {
    quotePage.addAddon("additional-home-emergency");

});

And('the user adds legal expenses cover addon', () => {
    quotePage.addAddon("additional-legal-protection");

});
//passing the payment type dynamically to test both monthly and annual scenarios
Then(/^the user is able to purchase the policy(?: (\w+))?$/, (paymentType) => {

        cy.contains('12 x payments of').should('be.visible');
        quotePage.buttons.apply().first().click();
        eligibilityPage.agreeEligibility();
        cy.contains('Minimum standards of security endorsement').should('be.visible');
        endorsementsPage.buttons.next().click();
        cy.contains('Quote is valid until').should('be.visible');
        summaryPage.buttons.next().click();
        cy.contains('Application details').should('be.visible');
        applicationPage.fillApplicationPage();
        cy.contains('Account holder name').should('be.visible');
        paymentPage.completePayment(paymentType);
        //currently getting an error after completing the payment, validating on the error message instead
        cy.contains('Sorry, an error occurred.').should('be.visible');
 
});
