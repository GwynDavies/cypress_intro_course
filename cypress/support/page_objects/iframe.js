const loginUserNameLocator = 'input[name="username"]'
const loginUserPasswordLocator = 'input[name="password"]'
const loginButtonLocator = '#loginBtn'
const loginMessageLocator = 'h4'

function url() {
  return "/iframe"
}

function iframeLoginUserNameField() {
  return loginUserNameLocator
}

function iframeLoginUserPasswordField() {
  return loginUserPasswordLocator
}

function iframeLoginButton() {
  return loginButtonLocator
}

function iframeLoginMessageField() {
  return loginMessageLocator
}

export {
  url,
  iframeLoginUserNameField,
  iframeLoginUserPasswordField,
  iframeLoginButton,
  iframeLoginMessageField
}