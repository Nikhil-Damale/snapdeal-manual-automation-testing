class HomePage {
  searchProduct(productName) {
    cy.get('#inputValEnter').type(productName);     
    cy.get('.searchTextSpan').click();            
  }
}

export default HomePage;
