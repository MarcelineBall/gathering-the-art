describe('favoriteDisplay', () => {
  beforeEach(() => {
    cy.fixture('brandonKitkouskiCards').then((brandonKitkouskiCards) => {
      cy.intercept('https://api.magicthegathering.io/v1/cards?artist=Brandon_Kitkouski', brandonKitkouskiCards)
    })
    cy.visit('http://localhost:3000/')
  })

  
})
