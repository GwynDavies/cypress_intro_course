const navBarLocator = 'nav'
const navBarAssertionsDropDownLocator = '#assertionsDropdown'
const navBarWebFormsDropDownLocator = '#webFormsDropdown'

const browserTypeButtonLocator = '#browser_type'
const browserTypesLocator = '#browser_div'
const browserChromeTrueFalseLocator = '.output-chrome'
const browserEdgeTrueFalseLocator = '.output-edge'
const browserFireFoxTrueFalseLocator = '.output-firefox'
const browserOperaTrueFalseLocator = '.output-opera'


function url() {
  return "/"
}

function navBar() {
  return navBarLocator
}

function navBarAssertionsDropDownField() {
  return navBarAssertionsDropDownLocator
}

function navBarWebFormsDropDownField() {
  return navBarWebFormsDropDownLocator
}

function browserTypeButton() {
  return browserTypeButtonLocator
}

function browserTypes() {
  return browserTypesLocator
}

// Are we using the given broser - true/false

function browserValueField(browserName) {
  if (browserName === 'Chrome') {
    return browserChromeValueField()
  } else if (browserName === 'Edge') {
    return browserEdgeValueField()
  } else if (browserName === 'Firefox') {
    return browserFireFoxValueField()
  } else if (browserName === 'Opera') {
    return browserOperaValueField()
  } else {
    throw new Error("Browser was not recognized =" + browserName)
  }
}

// Are we using Chrome - true/false

function browserChromeValueField() {
  return browserChromeTrueFalseLocator
}

// Are we using  Edge - true/false

function browserEdgeValueField() {
  return browserEdgeTrueFalseLocator
}

// Are we using  Firefox - true/false

function browserFireFoxValueField() {
  return browserFireFoxTrueFalseLocator
}

//  Are we using Opera - true/false

function browserOperaValueField() {
  return browserOperaTrueFalseLocator
}

export {
  url,
  navBar,
  navBarAssertionsDropDownField,
  navBarWebFormsDropDownField,
  browserTypeButton,
  browserTypes,
  browserValueField,
  browserChromeValueField,
  browserEdgeValueField,
  browserFireFoxValueField,
  browserOperaValueField
}