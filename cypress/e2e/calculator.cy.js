describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total display with result of calculations', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })

  it('should be able to chain multiple operators in a calculation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('should appropriately display positive numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('should appropriately display negative numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')

  })
  
  it('should appropriately display decimal numbers', () => {
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0.5')
  })

  it('should appropriately display very large numbers', () => {
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-multiply').click()
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10000000')
  })

  it('should return "Not a number" when a number is divided by zero', () => {
    cy.get('#number4').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Not a number')
  })

  xit('exceptional circumstances 2', () => {

  })
})