// beforeEach(() => {
//     cy.task("resetDb");
//   });

it("can run a test", () => {
  assert.equal(1, 1);
});

it("can load the page", () => {
  cy.visit("http://localhost:3000");
});

// describe("list recipe", () => {
//   it("displays a list of recipe", () => {
//     cy.visit("http://localhost:3000");
//     cy.contains("Sery1976");
//     cy.contains("Spont1935");
//   });
// });

it("can navigate to add-recipe page", () => {
  cy.visit("http://localhost:3000/add-recipe");
});

it("can input information", () => {
  cy.visit("http://localhost:3000/add-recipe");
  cy.get("#username").type("information");
  cy.get("#recipe_name").type("recipe name")
  cy.get('#ingredients').type('ingredient')
});

// it("can submit information", () => {
//   cy.visit("http://localhost:3000/add-recipe");
//   cy.get("#message").type("information");
//   cy.get("#name").type("my name")
//   cy.get('form').submit()
// });


