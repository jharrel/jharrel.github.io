const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/Elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/Generic.js"))),
  "component---src-pages-graphics-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/Graphics.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/index.js"))),
  "component---src-pages-videos-js": hot(preferDefault(require("/Users/jharrel/Desktop/jharrel.github.io/src/pages/Videos.js")))
}

