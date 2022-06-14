/// <reference types="cypress" />
describe('bom', () => {
  it('contains cannot find text with bom', () => {
    cy.visit('http://localhost:5657')
    cy.contains('\ufefftesting\ufeff\ufeff and stuff')
  })

  it('we can still assert against text with bom', () => {
    cy.visit('http://localhost:5657')
    cy.get('#target')
      .should((div) => {
        const text = div.text()
        // cy.contains() does not appear to be able to find elements with \ufeff, so we assert manually
        expect(text).to.eq('\ufefftesting\ufeff\ufeff and stuff')
      })

  })
})
