describe('template spec', () => {

  it('Checking Movies Page', () => {
    cy.visit('/productions/movie')
    cy.get('h3').invoke('text').should('eq', 'Movies')
    cy.get('img').first().parent().invoke('attr', 'href').should('include', 'movie')
  })

  it('Checking Series Page', () => {
    cy.visit('/productions/tv')
    cy.get('h3').invoke('text').should('eq', 'Series')
    cy.get('img').first().parent().invoke('attr', 'href').should('include', 'tv')
  })

})