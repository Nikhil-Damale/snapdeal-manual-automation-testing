import CartPage from '../pages/4CartPage';

describe('Snapdeal Cart Test - Simple', () => {
  const cart = new CartPage();

  it('Should add a product to the cart', () => {
    cy.visit('https://www.snapdeal.com');

    
    cy.get('#inputValEnter').type('bag{enter}');

    cy.get('.product-tuple-listing').first().click();

    
    cart.addToCart();

    
    cy.wait(3000);

    
    cart.goToCart();

    cart.verifyCartNotEmpty();
  });
});
