/**
 * MIT License
 *
 * Copyright (c) 2021 Gwyn M. Davies
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
describe("05 Assertions", () => {
  before(() => {
    cy.visit('/should-be')
  })

  it("Should be'", () => {
    // visible

    // Note: if there are multiple elements the assertions:
    // 
    //   be.visible and 
    //   not.be.visible
    // 
    // ... act differently
    // 
    //
    //     be.visible
    //     ----------
    //     retry until *SOME* elements are visible
    //       cy.get('li').should('be.visible')
    //
    // 
    //     not.be.visible
    //     --------------
    //     retry until *EVERY* element is invisible
    //       cy.get('li.hidden').should('not.be.visible')

    cy.get('#btn1')
      .should('be.visible')
    cy.get('#btn2')
      .should('not.be.visible')

    cy.get('#ul1')
      .should('be.visible')
    cy.get('#ul2')
      .should('not.be.visible')

    // checked

    cy.get('#cb1')
      .should('be.checked')
    cy.get('#cb2')
      .should('not.be.checked')

    // empty

    cy.get('#div1')
      .should('be.empty')
    cy.get('#div2')
      .should('not.be.empty')

    // enabled & disabled

    cy.get('#btn3')
      .should('be.enabled')
    cy.get('#btn4')
      .should('be.disabled')

    // a
    cy.get('#anumber')
      .invoke('val')
      .should('be.a', 'string')

    cy.get('#anumber')
      .its('length')
      .should('be.a', 'number')
  })
})