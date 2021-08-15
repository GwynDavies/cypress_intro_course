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
    cy.visit('/should-include')
  })

  it("Should include", () => {
    // ... include a text value

    cy.get('#div1')
      .should('include.text', 'address')

    cy.get('#div1')
      .should('not.include.text', 'location')
  })

  it("Should includes/contain/contains (All aliases of include)", () => {
    /*
     * includes
     */

    cy.get('#div1')
      .should('includes.text', 'address')

    cy.get('#div1')
      .should('not.includes.text', 'location')

    /*
     * contain
     */

    cy.get('#div1')
      .should('contain.text', 'address')

    cy.get('#div1')
      .should('not.contain.text', 'location')

    /*
     * contains
     */

    cy.get('#div1')
      .should('contains.text', 'address')

    cy.get('#div1')
      .should('not.contains.text', 'location')
  })
})