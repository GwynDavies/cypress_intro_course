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

describe("07 Navigation - NavBar", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // NavBar - 'Home'

    it("NavBar 'Home'", () => {
        cy.get(page.navBarField())
            .contains('Home')
            .click()

        // Use regular expression (regex)
        //
        // Expect a URL lke http://localhost:NNNN/
        //
        // You can test out your regex at sites like
        //         https://www.regextester.com/
        //
        cy.url()
            .should('match', /^http:\/\/localhost\:[1-9][0-9]{3}\/$/)
    })

    // NavBar 'Locators'

    it("NavBar 'Locators'", () => {
        cy.get(page.navBarField())
            .contains('Locators')
            .click()

        cy.url()
            .should('contain', 'locators')
    })

    // NavBar - Assertions

    it("NavBar Assertions Dropdown - 'should be'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should be')
            .click()

        cy.url()
            .should('contain', 'should-be')
    })

    it("NavBar Assertions Dropdown - 'should have'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should have')
            .click()

        cy.url()
            .should('contain', 'should-have')
    })

    it("NavBar Assertions Dropdown - 'should equal'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should equal')
            .click()

        cy.url()
            .should('contain', 'should-equal')
    })

    it("NavBar Assertions Dropdown - 'should match'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should match')
            .click()

        cy.url()
            .should('contain', 'should-match')
    })

    it("NavBar Assertions Dropdown - 'should contain'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should contain')
            .click()

        cy.url()
            .should('contain', 'should-contain')
    })

    it("NavBar Assertions Dropdown - 'should include'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should include')
            .click()

        cy.url()
            .should('contain', 'should-include')
    })

    it("NavBar Assertions Dropdown - 'should exist'", () => {
        cy.get(page.navBarAssertionsDropDownField())
            .click()

        cy.contains('should exist')
            .click()

        cy.url()
            .should('contain', 'should-exist')
    })

    // NavBar - Webforms

    it("NavBar Web Forms  Dropdown - 'Web form - GET'", () => {
        cy.get(page.navBarWebFormsDropDownField())
            .click()

        cy.contains('Web form - GET')
            .click()

        cy.url()
            .should('contain', 'webform-get')
    })

    it("NavBar Web Forms  Dropdown - 'Web form - POST'", () => {
        cy.get(page.navBarWebFormsDropDownField())
            .click()

        cy.contains('Web form - POST')
            .click()

        cy.url()
            .should('contain', 'webform-post')
    })

    it("NavBar Web Forms  Dropdown - 'Web form - File UPLOAD'", () => {
        cy.get(page.navBarWebFormsDropDownField())
            .click()

        cy.contains('Web form - File UPLOAD')
            .click()

        cy.url()
            .should('contain', 'webform-upload')
    })

    // NavBar 'Dialogs'

    it("NavBar 'Dialogs'", () => {
        cy.get(page.navBarField())
            .contains('Dialogs')
            .click()

        cy.url()
            .should('contain', 'dialogs')
    })

    // NavBar 'IFrame'

    it("NavBar 'IFrame'", () => {
        cy.get(page.navBarField())
            .contains('IFrame')
            .click()

        cy.url()
            .should('contain', 'iframe')
    })
})