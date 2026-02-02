import testData from '../testData.json';

class LoginPage {

    buttons = {
        signIn: () => cy.get('[data-testid="login-sign-in"]')
    };

    inputFields = {
        email: () => cy.get('#login-email-address'),
        password: () => cy.get('#login-password')
    };

    enterDetails(){
        this.inputFields.email().type(testData.loginEmail);
        this.inputFields.password().type(testData.password);
    }
}

export default new LoginPage();
