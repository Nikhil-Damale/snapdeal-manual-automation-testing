class ProductDetailsPage {
  verifyProductInfo() {
    cy.get('.product-title').should('be.visible');

    cy.get('.product-price').should('be.visible');
  }
}

export default ProductDetailsPage;
