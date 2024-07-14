//TC-003: Empty Field Error

describe("Empty Field Error", () => {
  it("should display error messages for empty required fields", () => {
    cy.visit("https://localhost/register");
    cy.get("#submitButton").click();
    cy.contains("Full Name is required").should("be.visible");
    cy.contains("Email Address is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
    cy.contains("Confirm Password is required").should("be.visible");
    cy.contains("Date of Birth is required").should("be.visible");
  });
});
