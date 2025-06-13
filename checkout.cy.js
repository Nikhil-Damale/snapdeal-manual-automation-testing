import CheckoutPage from '../pages/5CheckoutPage';

describe('Checkout Flow', () => {
  const checkout = new CheckoutPage();

  beforeEach(() => {
    cy.visit('https://www.snapdeal.com');
    cy.get('#inputValEnter').type('shirt{enter}');
    cy.get('.product-title').first().click();
    cy.get('#add-cart-button-id').click();
  });

  it('Simulate checkout', () => {
    checkout.simulateCheckout();
  });
});
