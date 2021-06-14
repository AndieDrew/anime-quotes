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

});