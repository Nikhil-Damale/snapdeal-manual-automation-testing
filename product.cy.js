import ProductDetailsPage from '../pages/3ProductDetailsPage';

describe('Product Page', () => {
  const product = new ProductDetailsPage();

  beforeEach(() => {
    cy.visit('https://www.snapdeal.com');
    cy.get('#inputValEnter').type('watch{enter}');        
    cy.get('.product-tuple-image').first().click();     
  });

  it('Verify product details', () => {
    product.verifyProductInfo();                           
  });
});
