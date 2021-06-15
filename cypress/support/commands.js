Cypress.Commands.add("load", () => {
  cy.intercept("https://animechan.vercel.app/api/random", {
    anime: "Fairy Tail",
    character: "Natsu Dragneel",
    quote:
      "If you don't have the courage to change things then you might as well just die!!!",
  })
  cy.visit("http://localhost:3000");
})

Cypress.Commands.add("getNewQuote", () => {
  cy.intercept("https://animechan.vercel.app/api/random", {
    anime: "Test Anime",
    character: "Test Character",
    quote: "Test Quote",
  })
  cy.visit("http://localhost:3000");
})
