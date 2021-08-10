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
const browser = require("../../support/lib/browser")
const page = require("../../support/page_objects/home")

describe("03 Debugging commands", () => {

    it("Using cy.log", () => {
        cy.visit(page.url())

        // WRITE FIRST MESSAGE TO THE COMMAND LOG ...

        cy.log('FIRST MESSAGE - Checking for browser')

        // Get the name of the browser we are actually using

        const browserName = browser.getBrowserName()

        // Get the name of the browser, as detected by code running on the web page

        cy.get(page.browserTypeButton())
            .click()

        cy.get(page.browserValueField(browserName))
            .invoke('text')
            .should('be.equal', 'true')

        // WRITE SECOND MESSAGE TO THE COMMAND LOG ...

        cy.log('SECOND MESSAGE - Browser name :', browserName)
    })
})