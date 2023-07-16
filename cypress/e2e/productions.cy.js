describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('/productions')
    cy.get('.backgroundImage')
  })

  it('Checking UI', () => {
    cy.contains('Home')
    cy.contains('Movies')
    cy.contains('Series')
    cy.contains('Admin')
    cy.contains('WATCH NOW')
    cy.contains('Credits')
    cy.contains('Now playing')
    cy.contains('On the air')
  })

  it('Loaded movies', () => {
    cy.get('ul').find('img').first().click()
    cy.url().should('include', '/productions/movie/')
  })

  it('Loaded series', () => {
    cy.get('ul').find('img').last().click({ force: true})
    cy.url().should('include', '/productions/tv/')
  })

})