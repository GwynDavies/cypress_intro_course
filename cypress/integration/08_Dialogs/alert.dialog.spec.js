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
describe("Dialogs - Alert", () => {

  before(() => {
    cy.visit('/dialogs').debug()
  })

  it("I can handle an Alert dialog", () => {
    /* 
     * Cypress automatically accepts Alert dialogs for you by default
     */

    // Click button to trigger the 'Alert dialog'

    cy.contains("Alert dialog")
      .click()
  })

  it("I can handle an Alert dialog and check its text", () => {
    /* 
     * Cypress automatically accepts Alert dialogs for you by default
     * 
     * However you can intercept the handling with cy.on for event "window:alert", 
     * and check the dialog text was as expected
     */

    cy.on("window:alert", dialogText => {
      // Assert Alert dialog has expected text  
      expect(dialogText)
        .to.equal("Triggered Alert Dialog")
    })

    // Click button to trigger the 'Alert dialog'

    cy.contains("Alert dialog")
      .click()
  })
})