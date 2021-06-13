Cypress.Commands.add('load', () => {
    cy.intercept('https://animechan.vercel.app/api/random', {
            anime: "Fairy Tail",
            character: "Natsu Dragneel",
            quote: "If you don't have the courage to change things then you might as well just die!!!"
      })
      cy.visit('http://localhost:3000');
    })