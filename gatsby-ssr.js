const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    ></script>,
    <noscript>
      <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
    </noscript>,
  ])
}
