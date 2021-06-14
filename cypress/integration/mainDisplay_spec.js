describe('mainDisplay', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  }

  it('should display the app name on page load', () => {
    cy.get('h1').contains('Gathering the Art')
  })
})
