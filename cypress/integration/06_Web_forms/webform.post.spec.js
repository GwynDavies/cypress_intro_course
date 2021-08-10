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
const page = require("../../support/page_objects/webform_post")

describe("06_Web_forms", () => {

  before(() => {
    cy.visit(page.url())
  })

  it("Method POST", () => {

    // Text

    cy.get(page.textField()).type('fname lname')

    cy.get(page.textField())
      .should('be.visible').and(($input) => {
        const val = $input.val()
        expect(val).eq('fname lname')
      })

    cy.get(page.textField())
      .should('have.value', 'fname lname')

    // Email

    cy.get(page.emailField()).type('fname.lname@domain.com')

    cy.get(page.emailField())
      .should('have.value', 'fname.lname@domain.com')

    // Password

    cy.get(page.passwordField()).type('secret')

    cy.get(page.passwordField())
      .should('have.value', 'secret')

    // Range

    for (let v = 100; v >= 0; v -= 5) {
      cy.wait(50) // So we can see it change
      cy.get(page.rangeField())
        .then(element => (element.val(v.toString())))
        .trigger("change", {
          force: true
        }) //Firefox requires force true
        .should('have.value', v.toString())
    }

    for (let v = 0; v <= 100; v += 5) {
      cy.wait(50) // So we can see it change
      cy.get(page.rangeField())
        .then(element => (element.val(v.toString())))
        .trigger("change", {
          force: true
        }) //Firefox requires force true
        .should('have.value', v.toString())
    }

    // Submit web form

    cy.get(page.submitButton()).click()
  })
})