describe('artistDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon_Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/Brandon_Kitkouski')
  })

  it('should be able to visit an artist\'s page by clicking on their name', () => {
    cy.visit('http://localhost:3000/')
      .get('p').contains('Brandon Kitkouski').click()
      .location('pathname').should('eq', '/Brandon_Kitkouski')
  })

  it('should display the cards for that artist', () => {
    cy.get('main').children('article').should('have.length', 3)
      .get('article').find('img')
      .get('.card-name').contains('Cascade Bluffs')
      .get('article').find('button')
  })

  it('should be able to go to the main page when you hit the home button', () => {
    cy.get('h2').contains('Home').click()
      .location('pathname').should('eq', '/')
      .get('p').contains('Aaron Miller')
  })

  it('should be able to use the browser\'s back and forth buttons to navigate', () => {
    cy.visit('http://localhost:3000/')
      .get('p').contains('Brandon Kitkouski').click()
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/Brandon_Kitkouski')
  })
})
