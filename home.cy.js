import HomePage from '../pages/1home';

describe('Home Page Logo Test', () => {
  const home = new HomePage();

  beforeEach(() => {
    cy.visit('https://www.snapdeal.com');
  });

  it('Verify Snapdeal logo is visible', () => {
    home.verifyLogo();
  });
});
