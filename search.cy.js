import HomePage from '../pages/2SearchResultsPage';

describe('Snapdeal Search using POM', () => {
  const home = new HomePage();

  beforeEach(() => {
    cy.visit('https://www.snapdeal.com');
  });

  it('TC_001 - Should search for "shoes" and navigate to results page', () => {
    home.searchProduct('shoes');                      
    cy.url().should('include', 'search');             
  });
});
