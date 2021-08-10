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
const page = require("../../support/page_objects/home")

describe("07 Navigation - Go and reload", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // NavBar 'Locators'

    it("NavBar 'Locators'", () => {
        cy.get(page.navBarField())
            .contains('Locators')
            .click()

        cy.url()
            .should('contain', 'locators')

        // Go back to the 'Home' page

        cy.go('back')

        // Use regular expression (regex)
        //
        // Expect a URL lke http://localhost:NNNN/
        //
        // You can test out your regex at sites like
        //         https://www.regextester.com/
        //
        cy.url()
            .should('match', /^http:\/\/localhost\:[1-9][0-9]{3}\/$/)

        // Go forward

        cy.go('forward')

        cy.url()
            .should('contain', 'locators')

        // Reload the page

        cy.reload()

        cy.url()
            .should('contain', 'locators')

    })
})