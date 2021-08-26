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
require('cypress-iframe')
const page = require("../../support/page_objects/iframe")

describe("Iframe usage", () => {

  it("Is possible to use an internal iframe", () => {
    cy.visit(page.url())

    // Check the iframe loaded
    cy.frameLoaded(page.internalIframe(), {
      timeout: 10000
    })

    // Fill out contact form
    cy.enter(page.internalIframe()).then(getBody => {

      // Check 'subscribed' message is not visible
      getBody()
        .find(page.internalIframeSubscribedMessage())
        .should('not.be.visible')

      // Set email address and click 'Subscribe' button
      const testEmail = 'fname.lname@localhost.com'
      getBody()
        .find(page.internalIframeEmailField())
        .should('be.visible')
        .type(testEmail)

      // Click "Subscribe" button
      getBody()
        .find(page.internalIframeSubscribeButton())
        .click()

      // Check 'subscribed' message is now visible and has correct message
      getBody()
        .find(page.internalIframeSubscribedMessage())
        .should('be.visible')
      getBody()
        .find(page.internalIframeSubscribedMessage())
        .then(el => el.text()).should('be.equal', 'You are now subscribed!')
    })
  })

  /*
   * Currently does not work for FireFox
   */
  it("Is possible to use an external iframe", () => {
    if (Cypress.isBrowser('firefox')) {
      cy.log("!!! This test currently does not run under FireFox !!!")
    } else {
      cy.visit(page.url())

      // Check the iframe loaded
      cy.frameLoaded(page.externalIframe(), {
        timeout: 30000
      })

      cy.enter(page.externalIframe()).then(getBody => {
        // Press large centered play button
        getBody()
          .find(page.externalIframeInitialPlayButton())
          .should('be.visible')
          .click()

        // Give it a chance to play some discernable content
        cy.wait(10000)

        // Press pause button
        getBody()
          .find(page.externalIframePauseButton())
          .click()
      })
    }
  })
})