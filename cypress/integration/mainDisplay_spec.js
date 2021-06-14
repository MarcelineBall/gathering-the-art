describe('mainDisplay', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have the url path of "/"', () => {
    cy.location('pathname').should('eq', '/')
  })

  it('should display the app name on page load', () => {
    cy.get('h1').contains('Gathering the Art')
  })

  it('should display the tagline', () => {
    cy.get('h2').contains('Art so good it\'s Magic')
  })

  it('should display the link to favorites', () => {
    cy.get('h2').contains('View favorites')
  })

  it.skip('should display the list of artists', ()=> {
    cy.fixture('magicArtists').then((magicArtists) => {
      magicArtists.artists.map(artist => {
        cy.get('p').contains(artist)
      })
    })
  })
})
