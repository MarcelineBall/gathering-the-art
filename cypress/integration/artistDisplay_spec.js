describe('artistDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit an artist\'s page by clicking on their name', () => {
    cy.get('p').contains('Brandon Kitkouski').click()
  })


})
