describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('Success Register', () => {
    // Memilih radio button "Male"
    cy.get('#gender-male').check().should('be.checked')
    cy.get('#gender-female').should('not.be.checked')
    // Memilih radio button "Female"
    cy.get('#gender-male').check().should('be.checked')
    cy.get('#gender-female').should('not.be.checked')

    cy.get('input[name="FirstName"]').type('Okta')
    cy.get('input[name="LastName"]').type('vian')
    cy.get('input[name="Email"]').type('oktavian@gmail.com')
    cy.get('input[name="Password"]').type('1234567')
    cy.get('input[name="ConfirmPassword"]').type('1234567')
    cy.get('input[name="register-button"]').click()
    cy.url().should('include', '/registerresult/1')
  })


  it.only('Failed Register', () => {
    // Memilih radio button "Male"
    cy.get('#gender-male').check().should('be.checked')
    cy.get('#gender-female').should('not.be.checked')
    // Memilih radio button "Female"
    cy.get('#gender-male').check().should('be.checked')
    cy.get('#gender-female').should('not.be.checked')
    
    cy.get('input[name="FirstName"]').type('Okta')
    cy.get('input[name="LastName"]').type('vian')
    cy.get('input[name="Email"]').type('salah')
    cy.get('input[name="Password"]').type('1234567')
    cy.get('input[name="ConfirmPassword"]').type('1234567')
    cy.get('input[name="register-button"]').click()
    cy.get('.field-validation-error').should('be.visible')
    // cy.get('.chakra-alert').should('contain.text','wrong email')
  })

})

