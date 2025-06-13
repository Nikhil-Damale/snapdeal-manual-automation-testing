class HomePage {
  verifyLogo() {
    cy.get('.notIeLogoHeader').should('be.visible');
  }
}

export default HomePage;
