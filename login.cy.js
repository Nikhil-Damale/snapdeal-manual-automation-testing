import LoginPage from '../pages/6LoginPage';
import userData from '../fixtures/userData.json';

describe('Login Tests', () => {
  const login = new LoginPage();

  beforeEach(() => {
    cy.visit('https://www.snapdeal.com');
    cy.get('.accountInner').click();
    cy.contains('Login').click();
  });

  it('Login with valid credentials', () => {
    login.login(userData.validUser.email, userData.validUser.password);
    login.verifyLogin();
  });
});
