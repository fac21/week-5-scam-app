beforeEach(() => {
    cy.task("resetDb");
  });

describe("run test", () => {
  it("can run a test", () => {
    assert.equal(1, 1);
  });
});

describe("load page", () => {
  it("can load the page", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("load page", () => {
  it("can load the page", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[type = 'button']").click();
    cy.url().should('include', '/add-recipe');
  });
});

// describe("list recipe", () => {
//   it("displays a list of recipe", () => {
//     cy.visit("http://localhost:3000");
//     cy.contains("Carrot Cake");
//     cy.contains("Steak and Chips");
//   });
// });

describe("navigate to add-recipe page", () => {
  it("can navigate to add-recipe page", () => {
    cy.visit("http://localhost:3000/add-recipe");
  });
});

describe("input information", () => {
  it("can input information", () => {
    cy.visit("http://localhost:3000/add-recipe");
    cy.get("#username").type("information");
    cy.get("#recipe_name").type("recipe name");
    cy.get('#ingredients').type('ingredient');
  });
});

describe("add recipe", () => {
  it("can add recipe", () => {
    cy.visit("http://localhost:3000/add-recipe");
    cy.get("#username").type("my name");
    cy.get("#recipe_name").type("recipe name");
    cy.get('#ingredients').type('ingredient')
    cy.get('form').submit()
  });
});
//test

