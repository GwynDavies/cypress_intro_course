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
const page = require("../../support/page_objects/webform_get")

describe("06 Web forms", () => {

  before(() => {
    cy.visit(page.url())
  })

  it("Method GET", () => {

    // Text

    cy.get(page.textField())
      .type('fname lname')

    cy.get(page.textField())
      .should('have.value', 'fname lname')

    // Email

    cy.get(page.emailField())
      .type('fname.lname@domain.com')

    cy.get(page.emailField())
      .should('have.value', 'fname.lname@domain.com')

    // Password

    cy.get(page.passwordField())
      .type('secret')

    cy.get(page.passwordField())
      .should('have.value', 'secret')

    // Number

    cy.get(page.numberField())
      .type('30')
    cy.get(page.numberField())
      .should('have.value', '30')

    // Phone

    cy.get(page.phoneField())
      .type('123-456-7890')

    cy.get(page.phoneField())
      .should('have.value', '123-456-7890')

    //  Date ... YYYY-MM-DD

    cy.get(page.dateField())
      .type('1970-01-01')

    cy.get(page.dateField())
      .should('have.value', '1970-01-01')

    // Typing into a time input with cy.type() requires a valid time with the format 
    // HH:mm, HH:mm:ss or HH:mm:ss.SSS, 
    // Where HH is 00-23, mm is 00-59, ss is 00-59, and SSS is 000-999

    cy.get(page.timeField())
      .type('22:11:00')

    cy.get(page.timeField())
      .should('have.value', '22:11:00')

    // Checkboxes

    cy.get(page.checkBox1Field())
      .check({
        force: true
      }) // Field slightly obscured in browser (does not scroll down enough in FireFox - hence force)

    cy.get(page.checkBox1Field())
      .should('be.checked')

    cy.get(page.checkBox2Field())
      .check({
        force: true
      }) // Field slightly obscured in browser (does not scroll down enough in FireFox - hence force)

    cy.get(page.checkBox2Field())
      .should('be.checked')

    cy.get(page.checkBox1Field()) // Still checked
      .should('be.checked')

    // Radio buttons

    cy.get(page.radioButton1Field())
      .check({
        force: true
      }) // Field slightly obscured in browser (does not scroll down enough in FireFox - hence force)

    cy.get(page.radioButton1Field())
      .should('be.checked')

    cy.get(page.radioButton2Field())
      .check({
        force: true
      }) // Field slightly obscured in browser (does not scroll down enough in FireFox - hence force)

    cy.get(page.radioButton2Field())
      .should('be.checked')

    cy.get(page.radioButton1Field())
      .should('not.be.checked')

    // Select

    cy.get(page.selectField())
      .should('not.have.value', 'Option 2')

    cy.get(page.selectField())
      .select('Option 2', {
        force: true
      }) //For some reason is requiring force in FireFox

    cy.get(page.selectField())
      .invoke('val')
      .should('deep.equal', ['option2'])

    // Text area

    cy.get(page.textAreaField())
      .type('This is line 1\nThis is line 2', {
        force: true
      }) //For some reason is requiring force in FireFox

    cy.get(page.textAreaField())
      .should('have.value', 'This is line 1\nThis is line 2')

    // Url

    cy.get(page.urlField())
      .type('https://www.wikipedia.org', {
        force: true
      }) //For some reason is requiring force in FireFox

    cy.get(page.urlField())
      .should('have.value', 'https://www.wikipedia.org')

    // Color

    let testColor = '#ff0000'

    cy.get(page.colorField())
      .then(element => (element.val(testColor)))
      .trigger("change", {
        force: true
      }) // Field slightly obscured in browser (does not scroll down enough in FireFox - hence force)

    cy.get(page.colorField())
      .should('have.value', testColor)

    // Range

    cy.get(page.rangeField()).focus()

    cy.get(page.rangeField())
      .then(element => (element.val("25")))
      .trigger("change", {
        force: true
      }) //Firefox requires force true
      .should('have.value', "25")

    cy.get(page.rangeField())
      .then(element => (element.val("75")))
      .trigger("change", {
        force: true
      }) //Firefox requires force true
      .should('have.value', "75")

    // Submit the web form

    cy.get(page.submitButton())
      .click({
        force: true
      }) //For some reason is requiring force in FireFox
  })
})