class CheckoutPage {
  simulateCheckout() {
  
    cy.get('#rzp-cart-button', { timeout: 10000 }).click({ force: true });
    
    cy.contains('Order Summary', { timeout: 10000 }).should('be.visible');
  }
}

export default CheckoutPage;
