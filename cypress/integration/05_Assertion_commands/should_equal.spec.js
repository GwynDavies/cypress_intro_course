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
describe("05 Assertions", () => {
  /*
   * Equal arrays
   */
  const array1 = [1, 2, 3]

  const array2 = [1, 2, 3]

  /*
   * Equal objects
   */

  const object1 = {top: {foo: {foo1: {bar1: 1}}}, foo2: {bar2: 2}}

  const object2 = {top: {foo: {foo1: {bar1: 1}}}, foo2: {bar2: 2}}

  before(() => {
    cy.visit('/should-equal')
  })

  it("Should equal text", () => {
    // eq equals eq

    cy.get('#div1')
      .invoke('text')
      .should('eq', 'A simple div')

    cy.get('#div1')
      .invoke('text')
      .should('equals', 'A simple div')

    cy.get('#div1')
      .invoke('text')
      .should('equal', 'A simple div')

    // eq

    cy.get('#div1')
      .invoke('text')
      .should('eql', 'A simple div')
  })

  it("Should equal - int number", () => {
    // eq equals equal

    cy.wrap(1)
      .should('eq', 1)

    cy.wrap(1)
      .should('equals', 1)

    cy.wrap(1)
      .should('equal', 1)

    // eql

    cy.wrap(1.0)
      .should('eql', 1)
  })

  it("Should equal - float number", () => {
    // eq equals equal

    cy.wrap(1.0)
      .should('eq', 1.0)

    cy.wrap(1.0)
      .should('equals', 1.0)

    cy.wrap(1.0)
      .should('equal', 1.0)

    // eql

    cy.wrap(1.0)
      .should('eql', 1.0)
  })

  it("Should equal - mixed int and float number", () => {
    // eq equals equal

    cy.wrap(1.0)
      .should('eq', 1)

    cy.wrap(1.0)
      .should('equals', 1)

    cy.wrap(1.0)
      .should('equal', 1)

    // eql

    cy.wrap(1.0)
      .should('eql', 1)
  })

  /*
   * Mixed int and string
   */

  it("Should (not allowed) - mixed int and string", () => {
    // eq equals equal

    //cy.wrap(1)
    //  .should('eq', '1')

    //cy.wrap(1)
    //  .should('equals', '1')

    //cy.wrap(1)
    //  .should('equal', '1')

    // eql

    //cy.wrap(1)
    // .should('eql', '1')
  })

  /*
   * Deep equal
   */

  it("Should deep equal arrays", () => {
    // eq
    //
    // This will not work - use deep eq
    //
    //cy.wrap(array1)
    //  .should('eq', array2)

    cy.wrap(array1)
      .should('deep.eq', array2)

    // equals
    //
    // This will not work - use deep equals
    //
    //cy.wrap(array1)
    //  .should('equals', array2)

    cy.wrap(array1)
      .should('deep.equals', array2)

    // equal
    //
    // This will not work - use deep equal
    //
    //cy.wrap(array1)
    //  .should('equal', array2)

    cy.wrap(array1)
      .should('deep.equal', array2)
  })

  it("Should deep eql arrays", () => {
    // eql IS FOR DEEP EQUAL

    cy.wrap(array1)
      .should('eql', array2)

    cy.wrap(array1)
      .should('deep.eql', array2)
  })

  /*
   * Deep equal objects
   */

  it("Should deep equal objects", () => {
    // eq
    //
    // This will not work - use deep eq
    //
    //cy.wrap(object1)
    //  .should('eq', object2)

    cy.wrap(object1)
      .should('deep.eq', object2)

    // equals
    //
    // This will not work - use deep equals
    //
    //cy.wrap(object1)
    //  .should('equals', object2)

    cy.wrap(object1)
      .should('deep.equals', object2)

    // equal
    //
    // This will not work - use deep equal
    //
    //cy.wrap(object1)
    //  .should('equal', object2)

    cy.wrap(object1)
      .should('deep.equal', object2)
  })

  it("Should deep eql objects", () => {
    // eql IS FOR DEEP EQUAL

    cy.wrap(object1)
      .should('eql', object2)

    cy.wrap(object1)
      .should('deep.eql', object2)
  })
})