import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit site for {string} time", (visitIndex) => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
});

When("I should see a search bar", () => {
  cy.get("#autocomplete").should(
    "have.attr",
    "placeholder",
    "Type to Select Countries"
  );

  assert.deepEqual({}, {});
});