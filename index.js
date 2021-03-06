'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      helloWorld: require('./widgets/helloWorld'),
    },
    listeners: {
      InitData: require('./listeners/initData'),
      changeValue: require('./listeners/changeValue'),
      errorListener: require('./listeners/errorListener')
    },
    rootWidget: 'helloWorld'
  }
}