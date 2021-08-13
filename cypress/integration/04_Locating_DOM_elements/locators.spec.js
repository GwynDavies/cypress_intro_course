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
const page = require("../../support/page_objects/locators")

describe("04 Locators", () => {
  before(() => {
    cy.visit(page.url())
  })

  /*
   * ID
   */

  it("Locate by 'id'", () => {
    // Show how we are going to locate

    cy.get(page.statusField())
      .invoke("html", "Locate by 'id'")

    // Locate

    cy.get('#test_button')
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Class
   */

  it("Locate by 'class'", () => {
    // Show how we are going to locate

    cy.get(page.statusField())
      .invoke("html", "Locate by 'class'")

    // Locate

    cy.get('.btn-outline-primary')
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Element type (button)
   */

  it("Locate by 'element type' (have to use additional locators as there are 2 buttons)", () => {
    // Show how we are going to locate
    //
    // Use element type (button), but also have to use additional locators
    // as there are 2 buttone on the page

    cy.get(page.statusField())
      .invoke("html", "Locate by 'element type'")

    // Locate

    cy.get('main div button')
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Combination - Parent ID and Element type
   */

  it("Locate by '(direct) parent id AND element type'", () => {
    // Show how we are going to locate

    cy.get(page.statusField())
      .invoke("html", "Locate by (direct)'parent id AND element type'")

    // Locate

    cy.get('#controls > button')
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Containing text
   */

  it("Locate by 'containing text'", () => {
    // Show how we are going to locate

    cy.get(page.statusField())
      .invoke("html", "Locate by 'containing text'")

    // Locate

    cy.contains("Click Me")
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Data attribute 
   */

  it("Locate by 'data attribute'", () => {
    // Show how we are going to locate

    cy.get(page.statusField())
      .invoke("html", "Locate by 'data attribute'")

    // Locate

    cy.get('[data-test-id="my_test_id"]')
      .click()

    cy.get(page.statusField())
      .should("have.text", "BUTTON FOUND")
  })

  /*
   * Eq - element index 
   */

    it("Locate by 'element index' (eq) - there are 2 buttons", () => {
      // Show how we are going to locate
      //
      // There are 2 buttons, get the 2nd button (index starts at 0)

      cy.get(page.statusField())
        .invoke("html", "Locate by 'element index' (1) as there are 2 buttons - starts at zero")
  
      // Locate
  
      //cy.get('main div button')
      cy.get('button').eq(1)
        .click()
  
      cy.get(page.statusField())
        .should("have.text", "BUTTON FOUND")
    })
})