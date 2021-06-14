describe('artistDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon Kitkouski', { body: brandonKitkouskiCards.cards }).as('cards')
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit an artist\'s page by clicking on their name', () => {
    cy.get('p').contains('Brandon Kitkouski')
  })
})
