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
describe("Dialogs - Confirm", () => {

  before(() => {
    cy.visit('/dialogs')
  })

  it("I can handle a Confirm dialog - Click 'OK'", () => {
    /* 
     * Cypress automatically accepts Confirm dialogs for you by default
     */

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Confirm dialog")
      .click()

    // Dialog Response should equal true (OK), as default is to simulate user clicking 'OK'

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'true')
  })

  it("I can handle a Confirm dialog - Click 'OK' and check dialog text", () => {
    /* 
     * Cypress automatically accepts Confirm dialogs for you by default
     *
     * However you can intercept the handling with cy.on for event "window:confirm", 
     * and check the dialog text was as expected
     * 
     * Then return 'true' to simulate the user clicking 'OK'
     */

    cy.on("window:confirm", dialogText => {
      expect(dialogText)
        .to.equal("Triggered Confirm Dialog")
      // Simulate clicking 'OK' (true)
      return true
    })

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Confirm dialog")
      .click()

    // Dialog Response should equal true, as we simulated clicking 'OK'

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'true')
  })

  it("I can handle a Confirm dialog - Click 'Cancel' and check dialog text", () => {
    /* 
     * Cypress automatically accepts Confirm dialogs for you by default
     *
     * However you can intercept the handling with cy.on for event "window:confirm", 
     * and check the dialog text was as expected
     * 
     * Then return 'false' to simulate the user clicking 'Cancel'
     */
    cy.on("window:confirm", dialogText => {
      expect(dialogText)
        .to.equal("Triggered Confirm Dialog")
      // Simulate user clicking 'Cancel' (false)
      return false
    })

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Confirm dialog")
      .click()

    // Dialog Response should equal false, as we simulated clicking 'Cancel'

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'false')
  })
})