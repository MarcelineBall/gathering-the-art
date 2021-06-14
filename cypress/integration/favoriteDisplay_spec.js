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

  it('should be able to add a card to favorites by clicking the favorite button', () => {
    cy.visit('http://localhost:3000/Brandon_Kitkouski')
      .get('button').first().click()
      .get('h2').contains('View favorites').click()
      .location('pathname').should('eq', '/favorites')
      .get('main').children('article').should('have.length', 1)
      .get('article').find('img')
      .get('.card-name').contains('Cascade Bluffs')
      .get('article').find('button')
  })

  it('should be able to remove a card from favorites by clicking the favorite button again', () => {
    cy.visit('http://localhost:3000/Brandon_Kitkouski')
      .get('button').first().click()
      .get('h2').contains('View favorites').click()
      .location('pathname').should('eq', '/favorites')
      .get('main').children('article').should('have.length', 1)
      .get('article').find('img')
      .get('.card-name').contains('Cascade Bluffs')
      .get('article').find('button').click()
      .get('main').children('article').should('have.length', 0)
      .get('h2').contains('You have not favorited any art yet')
  })
})
