const textLocator = "#text"
const emailLocator = "#email"
const passwordLocator = "#password"
const rangeLocator = "#range"

const resetLocator = 'button[type="reset"]'
const submitLocator = 'button[type="submit"]'

function url() {
  return "/webform-post"
}

function textField() {
  return textLocator
}

function emailField() {
  return emailLocator
}

function passwordField() {
  return passwordLocator
}

function rangeField() {
  return rangeLocator
}

function submitButton() {
  return submitLocator
}

export {
  url,
  textField,
  emailField,
  passwordField,
  rangeField,
  submitButton
}
