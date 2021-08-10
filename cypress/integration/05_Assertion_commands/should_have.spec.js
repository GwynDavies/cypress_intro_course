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
    cy.visit('/should-have')
  })

  it("Should have", () => {
    // class

    cy.get('#btn1')
      .should('have.class', 'class1')

    cy.get('#btn1')
      .should('not.have.class', 'class2')

    // text

    cy.get('#btn2')
      .should('have.text', 'Button 2')

    cy.get('#btn2')
      .should('not.have.text', 'Button 3')

    // css, note the colors have to be specified in RGB format

    cy.get('#div1')
      .should('have.css', 'color', 'rgb(0, 0, 0)')

    cy.get('#div1')
      .should('not.have.css', 'color', 'rgb(255, 0, 0)')

    // length

    cy.get('#ul1 li')
      .should('have.length', 3)

    cy.get('#ul1 li')
      .should('not.have.length', 2)

    // value

    cy.get('#input1')
      .should('have.value', 'first name')

    cy.get('#input1')
      .should('not.have.value', 'last name')
  })
})