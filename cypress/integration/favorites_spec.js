describe('Dashboard', () => {

    it('Should let user know they have no favorites', () => {
        cy.load()
          .get('li').eq(1).click()
          .get('.header').should('be.visible')
          .get('.pageTitle').should('be.visible')
          .get('.header > .pageTitle').contains('Anime Quotes')
          .get('.noFavorites').should('be.visible')
          .get('.noFavorites').contains('You have no favorites!')
    })

    it('Should show user their favorites', () => {
        cy.load()
          .get('.favoriteBtn').click()  

          .get('li').eq(1).click()
          .get('.noFavorites').should('not.exist')

          .get('.card').should('be.visible')
          .get('.card > .animeTitle').should('be.visible')
          .get('.card > .animeQuote').should('be.visible')
          .get('.card > .animeCharacter').should('be.visible')
          .get('.card > .animeTitle').contains('Fairy Tail')
          .get('.card > .animeQuote').contains('If you don\'t have the courage to change')
          .get('.card > .animeCharacter').contains('- Natsu Dragneel')
    })

    it('Should not have duplicate quotes', () => {
        cy.load()
          .get('.favoriteBtn').click()
          .get('.favoriteBtn').click()
          .get('.favoriteBtn').click()

          .get('li').eq(1).click()
          .get('.noFavorites').should('not.exist')
          
          .get('.card').eq(0).should('be.visible')
          .get('.card').eq(1).should('not.exist')
          .get('.card').eq(3).should('not.exist')
          .get('.card').should('have.length', 1)
    })

    it('Should be able to navigate back to the home page', () => {
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

          .get('li').eq(0).click()
          .get('.noFavorites').should('not.exist')
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
    })
});