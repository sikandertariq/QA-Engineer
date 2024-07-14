//TC-02: Form Validation Feedback


describe('Form Validation Feedback', () => {
    it('should display inline validation messages as the user types', () => {
      cy.visit('https://localhost/registration');
  
      cy.get('input[name="password"]').type('short');
      cy.contains('Password must be at least 8 characters').should('be.visible');
  
      cy.get('input[name="confirmPassword"]').type('different');
      cy.contains('Passwords do not match').should('be.visible');
    });
  });
  

