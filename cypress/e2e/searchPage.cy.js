describe('template spec', () => {
  const productionToSearch = 'super mario'

  beforeEach('passes', () => {
    cy.visit('/search')
    // cy.get('.lds-roller')
  })

  it('making a search not in database', () => {
    cy.get('input').type('wtfwtfwtfwtf')
    cy.get('form').submit()
    cy.contains('Not Found')
  })

  it('searching empty string', () => {
    cy.get('form').submit()
    cy.should('not.contain.text', 'Not Found')
    cy.get('ul').should('not.exist')
  })

  it('succesful search and click on production', () => {
    cy.get('input').type(productionToSearch)
    cy.get('form').submit()
    cy.get('.lds-roller')
    cy.should('not.contain.text', 'Not Found')
    cy.get('ul').find('img').first().as('firstImg')
    cy.get('@firstImg').invoke('attr', 'alt').as('altAttr')
    cy.get('@firstImg').click()
    cy.url().should('include', '/productions/movie/')
  })

  it('deleting whole searchBar content', () => {
    cy.get('input').as('searchBar')
    cy.get('@searchBar').type('content to delete')
    cy.get('form').submit()
    cy.contains('Not Found')
    cy.get('[data-cy="deleteButton"]').click()
    cy.get('@searchBar').invoke('val').should('eq','')
    
  })
  
})