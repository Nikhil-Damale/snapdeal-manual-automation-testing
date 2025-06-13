class LoginPage {
  login(email, password) {
    cy.get('#userName').type(email);               
    cy.get('#checkUser').click();                  
    cy.get('#j_password').type(password); 
    cy.get('#userSignup').click();              
  }
}
export default LoginPage;
