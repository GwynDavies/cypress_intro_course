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

  /*
   * Prompt dialogs
   */

  it("I can handle a Prompt dialog, simulate user giving response and clicking 'OK'", () => {
    /* 
     * Cypress automatically accepts Confirm dialogs for you
     *
     * However, here we override default behavior
     * 
     * Use cy.window and cy.stub to replace 'prompt' with our own function to simulate
     * the user giving a response and clicking 'OK'
     */

    cy.window().then((win) => {
      // Simulate response from the user
      cy.stub(win, "prompt")
        .returns("This is my answer.")
        .as('prompt')
    })

    // Click button 'Confirm dialog' to trigger the dialog
    cy.contains("Prompt dialog")
      .click()

    // Dialog text should have been 'Triggered Prompt Dialog'
    cy.get('@prompt')
      .should('have.been.calledOnceWithExactly',
        'Triggered Prompt Dialog')

    // Dialog Response should equal 'This is my answer.', which was the simulated response 
    cy.get('#dialogResponse')
      .trigger('change')
      .invoke('text')
      .should('equal', 'This is my answer.')
  })

  it("I can handle a Prompt dialog, simulate user not giving response and clicking 'Cancel'", () => {
    /* 
     * Cypress automatically accepts Confirm dialogs for you
     *
     * However, here we override default behavior
     * 
     * Use cy.window and cy.stub to replace 'prompt' with our own function to give the response
     * 'null'
     * 
     * As this is the default behavior by Cypress - this adds no value
     */
    cy.window().then((win) => {
      // Simulate response from the user
      cy.stub(win, "prompt")
        .returns(null)
        .as('prompt')
    })

    // Click button 'Confirm dialog' to trigger the dialog
    cy.contains("Prompt dialog")
      .click()

    // Dialog text should have been 'Triggered Prompt Dialog'
    cy.get('@prompt')
      .should('have.been.calledOnceWithExactly',
        'Triggered Prompt Dialog')

    // Dialog Response should equal to the equivalanet of 'null' which was simulated as the user
    // clicki
    cy.get('#dialogResponse')
      .trigger('change', {
        force: true
      }) // as technically its not visible being empty for 'null'
      .invoke('text')
      .should('equal', '') // no text value as the prompt returned null
  })
})