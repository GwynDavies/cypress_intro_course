const textLocator = "#text"
const fileLocator = "#file"
const submitLocator = 'button[type="submit"]'

function url() {
  return "/webform-upload"
}

function textField() {
  return textLocator
}

function fileField() {
  return fileLocator
}

function submitButton() {
  return submitLocator
}

export {
  url,
  textField,
  fileField,
  submitButton
}
