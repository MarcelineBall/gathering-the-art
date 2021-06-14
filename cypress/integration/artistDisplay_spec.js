describe('artistDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon_Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit an artist\'s page by clicking on their name', () => {
    cy.get('p').contains('Brandon Kitkouski').click()
    cy.location('pathname').should('eq', '/Brandon_Kitkouski')
  })

  it('should display the cards for that artist', () => {
    cy.visit('http://localhost:3000/Brandon_Kitkouski')
      .get('main').children('article').should('have.length', 3)
      .get('article').find('img')
      .get('.card-name').contains('Cascade Bluffs')
      .get('article').find('button')
  })
})
