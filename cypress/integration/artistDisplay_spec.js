describe('artistDisplay', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    
  })

  it('should be able to visit an artist\'s page by clicking on their name', () => {
    cy.get('p').contains('Bad Flip Productions')
  })
})
