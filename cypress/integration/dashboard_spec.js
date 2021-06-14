describe('Dashboard', () => {

    it('Should show application title', () => {
        cy.load()
        cy.get('.header').should('be.visible')
          .get('.pageTitle').should('be.visible')
          .get('.header > .pageTitle').contains('Anime Quotes')
    })


    it('Should show a loading message before data is fetched', () => {
        cy.visit('http://localhost:3000');
        cy.get('.loading').should('be.visible')
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

    it('Should show new quote card', () => {
        cy.load()
          .get('.newQuoteBtn').click().getNewQuote()
          .get('.card').should('be.visible')
          .get('.card > .animeTitle').should('be.visible')
          .get('.card > .animeQuote').should('be.visible')
          .get('.card > .animeCharacter').should('be.visible')
          .get('.card > .animeTitle').contains('Test Anime')
          .get('.card > .animeQuote').contains('Test Quote')
          .get('.card > .animeCharacter').contains('Test Character')
    })

    it('Should navigate away from home page', () => {
        cy.load()
            .get('.header').should('be.visible')
            .get('.pageTitle').should('be.visible')
            .get('.header > .pageTitle').contains('Anime Quotes')
            .get('.card').should('be.visible')
            .get('.card > .animeTitle').should('be.visible')
            .get('.card > .animeQuote').should('be.visible')
            .get('.card > .animeCharacter').should('be.visible')
            .get('.card > .animeTitle').contains('Fairy Tail')
            .get('.card > .animeQuote').contains('If you don\'t have the courage to change')
            .get('.card > .animeCharacter').contains('- Natsu Dragneel')

            .get('li').eq(1).click()
            .get('.header').should('be.visible')
            .get('.pageTitle').should('be.visible')
            .get('.header > .pageTitle').contains('Anime Quotes')
            .get('.card').should('not.exist')
            .get('.card > .animeTitle').should('not.exist')
            .get('.card > .animeQuote').should('not.exist')
            .get('.card > .animeCharacter').should('not.exist')
    })
});