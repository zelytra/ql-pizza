import * as cypress from "cypress";

describe('E2E Pizza Delamama', () => {
  beforeEach('render', () => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('ajouter une pizza', () => {
    cy.get('.card').first().click()
  })

  it('ouverture du panier', () => {
    cy.get('.card').first().click()
    cy.get('.cart-wrapper').first().click()
  })

  it('Ajout d\'un pizza en plus', () => {
    cy.get('.card').first().click()
    cy.get('.cart-wrapper').click()
    cy.get('.plus-button').first().click()
    cy.get('.pizza-count').first().should('have.text', '2')
  })
})