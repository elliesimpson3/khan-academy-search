
describe('Searchbar from homepage', () => {

  beforeEach(() => {
    cy.visit('https://www.khanacademy.org/')
    //Type a backspace as a workaround for subsequent search text not pasting completely
    cy.get('[data-test-id="navbar-search-button"]').type(' {backspace}')
  })

  const SEARCH_BOX = '[data-test-id="page-search-box"]';
  const SEARCH_RESULTS = '.gsc-expansionArea .gsc-webResult.gsc-result';

  it('searches for a valid course', () => {
    cy.get(SEARCH_BOX).type('Intro to JS')
    cy.get(SEARCH_RESULTS).then(($resultcards) => {
      expect($resultcards).to.have.length(5)
      expect($resultcards.first().find('.gsc-thumbnail-inside a.gs-title').first()).to.contain('Intro to JS')
    })
  })

  it('searches for an invalid course', () => {
    cy.get(SEARCH_BOX).type('qweqwe')
    cy.get('.gsc-expansionArea .gsc-webResult.gsc-result div').should('have.class', 'gs-no-results-result')
  })

  it('searches and loads more results', () => {
    cy.get(SEARCH_BOX).type('Intro to JS')
    cy.get('.google-popup-results > a').click()
    cy.get(SEARCH_RESULTS).then(($resultcards) => {
      expect($resultcards).to.have.length(10)
    })
  })
})