// describe ('NAME OF THE FUNCTION', ANOTHER FUNCTION TO CREATE TEST CASES)
// it : used to create TEST CASES. Like @Test annotation
// it('NAME OF THE TEST CASE', FUNCTION TO CREATE)
describe('My First Test', () => {
    it('URL Test', () => {
        // And Verify the url contains google
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.url().should('include','google')
    })

    it('TITLE Test', () => {
        // And Verify the title equals Google
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.title().should('eq','Google')
    })
  })