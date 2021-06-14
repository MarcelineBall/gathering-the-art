describe('favoriteDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon_Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the favorites page by clicking the View favorites button', () => {
    cy.get('h2').contains('View favorites').click()
      .location('pathname').should('eq', '/favorites')
      .get('h2').contains('You have not favorited any art yet')
  })
})
