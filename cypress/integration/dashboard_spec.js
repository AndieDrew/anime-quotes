describe('Dashboard', () => {
    beforeEach(() => {
      
    });

    it('Should show application title', () => {
        cy.load()
        cy.get('.header').should('be.visible')
          .get('.pageTitle').should('be.visible')
          .get('.header > span > .pageTitle').contains('Anime Quotes')
    })

    it('Should show a quote card with correct data', () => {
        cy.load()
        cy.get('.card').should('be.visible')
          .get('.card > .animeTitle').should('be.visible')
          .get('.card > .animeQuote').should('be.visible')
          .get('.card > .animeCharacter').should('be.visible')
          .get('.card > .animeTitle').contains('Fairy Tail')
          .get('.card > .animeQuote').contains('If you don\'t have the courage to change')
          .get('.card > .animeCharacter').contains('- Natsu Dragneel')
    })
});