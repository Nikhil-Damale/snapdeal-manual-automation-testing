class CartPage {
  addToCart() {
    cy.get('#add-cart-button-id', { timeout: 10000 }).click({ force: true });
  }

  goToCart() {
    cy.visit('https://www.snapdeal.com/viewcart');
  }

  verifyCartNotEmpty() {
    cy.get('.cart-item-list').should('be.visible');
  }
}

export default CartPage;
