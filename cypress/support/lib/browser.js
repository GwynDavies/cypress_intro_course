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
export function getBrowserName() {
    // Get the user-agent string
    let userAgentString = navigator.userAgent

    // Detect Chrome
    let chromeAgent = userAgentString.indexOf("Chrome") > -1

    // Detect Edge
    let edgeAgent = userAgentString.indexOf("Edg") > -1
    // Discard Chrome if Edge detected since it also matches Chrome
    if ((chromeAgent) && (edgeAgent))
        chromeAgent = false

    // Detect Firefox
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1

    // Detect Opera
    let operaAgent = userAgentString.indexOf("OP") > -1
    // Discard Chrome since it also matches Opera     
    if ((chromeAgent) && (operaAgent))
        chromeAgent = false

    let browserName

    if (chromeAgent) {
        browserName = 'Chrome'
    } else if (edgeAgent) {
        browserName = 'Edge'
    } else if (firefoxAgent) {
        browserName = 'Firefox'
    } else if (operaAgent) {
        browserName = 'Opera'
    } else {
        browserName = 'unknown'
    }

    return browserName
}