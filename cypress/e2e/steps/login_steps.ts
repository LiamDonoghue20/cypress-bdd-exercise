import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';
import homePage from '../../support/pageObjects/home.page';
import loginPage from '../../support/pageObjects/login.page';

Given('the user is on the adviser platform login page', () => {
    cy.visit('/');
    cy.url().should('include', 'quotes.test');
});

When('the user enters valid details', () => {
    loginPage.enterDetails();
});

Then('the user can navigate to recent activity', () => {
    cy.visit('https://quotes.test.uinsure.co.uk/retrieve-quote');
    homePage.quoteReference.should('be.visible');
});

Then('the user is able to login succesfully', () => {
    cy.intercept('GET', 'UserSecurity').as('userSecurity');
    loginPage.buttons.signIn().click();
    cy.wait('@userSecurity').its('response.statusCode').should('eq', 200);
    homePage.buildingsAndContents.should('be.visible');
});