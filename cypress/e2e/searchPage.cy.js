describe('template spec', () => {
  const productionToSearch = 'super mario'

  beforeEach('passes', () => {
    cy.visit('/search')
    // cy.get('.lds-roller')
  })

  it('making a search not in database', () => {
    cy.get('input').type('wefwnfwfewin')
    cy.get('form').submit()
    cy.contains('Not Found')
  })

  it('searching empty string', () => {
    cy.get('form').submit()
    cy.should('not.contain.text', 'Not Found')
    cy.get('ul').should('not.exist')
  })

  it.only('succesful search and click on production', () => {
    cy.get('input').type(productionToSearch)
    cy.get('form').submit()
    cy.get('.lds-roller')
    cy.should('not.contain.text', 'Not Found')
    cy.get('ul').find('img').first().as('firstImg')
    cy.get('@firstImg').invoke('attr', 'alt').as('altAttr')
    cy.get('@firstImg').click()
    cy.url().should('include', '/productions/movie/')
  })
  
})