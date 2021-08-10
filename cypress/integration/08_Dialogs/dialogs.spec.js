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
describe("Dialogs", () => {

  before(() => {
    cy.visit('/dialogs')
  })

  // Alert

  it("Alert dialog", () => {
    // Setup assertion to confirm dialog was clicked, and it had the expected text

    cy.on("window:alert", (dialogText) => {
      expect(dialogText)
        .to.equal("Triggered Alert Dialog")
    })

    // Click button 'Alert dialog' to trigger the dialog

    cy.contains("Alert dialog")
      .click()
  })

  // Confirm

  it("Confirm dialog - Click 'OK'", () => {
    // Setup assertion to confirm dialog was clicked, and it had the expected text

    cy.on("window:confirm", (dialogText) => {
      expect(dialogText)
        .to.equal("Triggered Confirm Dialog")
      // Simulate clicking 'OK' (true)
      return true
    })

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Confirm dialog")
      .click()

    //cy.pause()

    // Dialog Response should equal true, as we clicked 'OK'

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'true')
  })

  it("Confirm dialog - Click 'Cancel'", () => {
    // Setup assertion to confirm dialog was clicked, and it had the expected text

    cy.on("window:confirm", (dialogText) => {
      expect(dialogText)
        .to.equal("Triggered Confirm Dialog")
      // Simulate clicking 'Cancel' (false)
      return false
    })

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Confirm dialog")
      .click()

    //cy.pause()

    // Dialog Response should equal true, as we clicked 'OK'

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'false')
  })

  // Prompt

  it("Prompt dialog", () => {
    cy.window().then((win) => {

      // Simulate response from the user
      cy.stub(win, "prompt")
        .returns("This is my answer.")
    })

    // Click button 'Confirm dialog' to trigger the dialog

    cy.contains("Prompt dialog")
      .click()

    // Dialog Response should equal to 'This is my answer.', which was the simulated response 

    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'This is my answer.')
  })
})