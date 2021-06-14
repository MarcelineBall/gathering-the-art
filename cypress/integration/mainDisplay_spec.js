describe('mainDisplay', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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

  it('should display the list of artists', ()=> {
    cy.fixture('magicArtists').then((magicArtists) => {
      magicArtists.map(artist => {
        cy.get('p').contains(artist)
      })
    })
  })
})
