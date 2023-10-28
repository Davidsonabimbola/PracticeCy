/// <reference types="cypress" />
import week1Page from "./pages/week1Page";
import week2Page from "./pages/week2Page";

describe('carrying out test on an E-commerce test', () => {
  it('first test', () => {
      cy.visit('/');
      week1Page.contactbutton();
      week1Page.buttonClick();
      
      
  })
});