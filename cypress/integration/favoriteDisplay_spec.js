describe('favoriteDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon_Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the favorites page from the home page by clicking the View favorites button', () => {
    cy.get('h2').contains('View favorites').click()
      .location('pathname').should('eq', '/favorites')
      .get('h2').contains('You have not favorited any art yet')
  })

  it('should be able to visit the favorites page from an artist\'s page by clicking the View favorites button', () => {
    cy.visit('http://localhost:3000/Brandon_Kitkouski')
      .get('h2').contains('View favorites').click()
      .location('pathname').should('eq', '/favorites')
      .get('h2').contains('You have not favorited any art yet')
  })
})
