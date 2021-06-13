describe('Dashboard', () => {
    beforeEach(() => {
      cy.load()
    });
    
    it('Should show application title', () => {
        cy.get('.header').should('be.visible')
          .get('.pageTitle').should('be.visible')
          .get('.header > span > .pageTitle').contains('Anime Quotes')
    })
});