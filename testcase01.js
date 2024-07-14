//TC-001: Register a new user with valid data

describe('Successful Registration', () => {
    it('Registers a new user with valid data', () => {
      cy.visit('https://localhost/register'); 
  
      const fullName = 'Sikander Tariq';
      const email = 'sikic@gmail.com';
      const password = 'SecurePassword123';
      const dob = '2002-04-13'; 
  
      cy.get('#fullName').type(fullName);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('#confirmPassword').type(password);
      cy.get('#dateOfBirth').type(dob);
  
      
      cy.get('#gender-male').click(); 
  
      cy.get('#submitButton').click();
  
      cy.get('.success-message').should('be.visible'); 
    });
  });
  

