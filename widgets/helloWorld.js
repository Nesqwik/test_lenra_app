'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    children: [
      {
        type: "text",
        value: `Hello ${data.value}!`
      },
      {
        type: "textfield",
        value: data.value,
        onChanged: {
          action: "changeValue"
        }
      },
      {
        type: "button",
        text: "Test listener error",
        onPressed: {
          action: "errorListener"
        }
      },
      {
        type: "button",
        text: "Unknown listener error",
        onPressed: {
          action: "noListener"
        }
      }
    ]
  }
}

