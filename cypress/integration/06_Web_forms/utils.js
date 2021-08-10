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

/*
 * Set a singled file for upload, fake a user selecting a file
 */

export function uploadFile(fileName, fileType = '', elementSelector) {
  // Get input Element with type 'file'
  cy.get(elementSelector)
    .then(elementFileInputs => {
      // Check we only have a single Element
      const numberOfElementsFound = elementFileInputs.length

      if (numberOfElementsFound !== 1) {
        throw 'Expected a single input Element, but got ' + numberOfElementsFound
      }

      // Uncomment to debug
      //debugger

      // Get the file to upload from a fixture
      cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)

        // Convert to Binary Large OBject (BLOB), so we can convert to a File
        .then(blob => {
          const elementFileInput = elementFileInputs[0]

          const fileToUpload = new File([blob], fileName, {
            type: fileType
          })

          // Create DataTransfer object, we need this to generate the 
          // FileList - as can't create one directly
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(fileToUpload)

          // Now we can generate the FileList on the input Element - as if
          // the user had selected the file
          elementFileInput.files = dataTransfer.files
        })
    })
}