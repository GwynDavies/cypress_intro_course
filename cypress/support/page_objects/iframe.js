const internalIframeLocator = '#IFrameContact'
const internalIframeSubscribedMessageLocator = '#subscribed_mesg'
const internalIframeEmailLocator = '#email'
const internalIframeSubscribeButtonLocator = '#subscribeBtn'

const externalIframeLocator = '#IFrameYouTube'
const externalIframeInitialPlayButtonLocator = '.ytp-large-play-button'
const externalIframePauseButtonLocator = '[title="Pause (k)"]'

function url() {
  return "/iframe"
}

/*
 * Internal IFrame
 */

function internalIframe() {
  return internalIframeLocator
}

function internalIframeSubscribedMessage() {
  return internalIframeSubscribedMessageLocator
}

function internalIframeEmailField() {
  return internalIframeEmailLocator
}

function internalIframeSubscribeButton() {
  return internalIframeSubscribeButtonLocator
}

/*
 * External IFrame
 */

function externalIframe() {
  return externalIframeLocator
}

function externalIframeInitialPlayButton() {
  return externalIframeInitialPlayButtonLocator
}

function externalIframePauseButton() {
  return externalIframePauseButtonLocator
}

export {
  url,
  internalIframe,
  internalIframeSubscribedMessage,
  internalIframeEmailField,
  internalIframeSubscribeButton,
  externalIframe,
  externalIframeInitialPlayButton,
  externalIframePauseButton
}