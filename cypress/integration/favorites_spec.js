describe('Dashboard', () => {

    it('Should let user know they have no favorites', () => {
        cy.load()
        cy.get('.header').should('be.visible')
          .get('.pageTitle').should('be.visible')
          .get('.header > .pageTitle').contains('Anime Quotes')

          .get('li').eq(1).click()
          .get('.noFavorites').should('be.visible')
          .get('.noFavorites').contains('You have no favorites!')
    })

});