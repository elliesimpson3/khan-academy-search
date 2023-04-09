
describe('Searchbar from homepage', () => {

  beforeEach(() => {
    cy.visit('https://www.khanacademy.org/')
    //Type a backspace as a workaround for subsequent search text not pasting completely
    cy.get('[data-test-id="navbar-search-button"]').type(' {backspace}')
  })

  const SEARCH_BOX = '[data-test-id="page-search-box"]';

  it('searches for a valid course with more than 10 results', () => {
    const SEARCH_RESULTS = '.gsc-expansionArea .gsc-webResult.gsc-result';
    const VALID_KEYWORD = 'Intro to JS'
    const RESULT_TITLE = '.gsc-thumbnail-inside a.gs-title'
    const SHOW_ALL_LINK = '.google-popup-results > a'

    cy.get(SEARCH_BOX).type(VALID_KEYWORD)
    cy.get(SEARCH_RESULTS).then(($resultcards) => {
      expect($resultcards).to.have.length(5)
      // First result should be the first item
      expect($resultcards.first().find(RESULT_TITLE).first()).to.contain(VALID_KEYWORD)
      cy.get(SHOW_ALL_LINK).click()
      cy.get(SEARCH_RESULTS).then(($resultcards) => {
        expect($resultcards).to.have.length(10)
        // First page of pagination is selected
        cy.get('.gsc-cursor div').first().should('have.class', 'gsc-cursor-current-page')
      })
    })
  })

  it('searches for an invalid course', () => {
    const INVALID_KEYWORD = 'qweqwe'
    const RESULTS_BLOCK = '.gsc-expansionArea .gsc-webResult.gsc-result div'

    cy.get(SEARCH_BOX).type(INVALID_KEYWORD)
    cy.get(RESULTS_BLOCK).should('have.class', 'gs-no-results-result')
  })
})