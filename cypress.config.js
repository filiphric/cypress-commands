const { defineConfig } = require('cypress')
const { plugin: replayPlugin, wrapOn } = require('@replayio/cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn)
      replayPlugin(on, config, {
        upload: true, // automatically upload your replays do DevTools
        apiKey: process.env.REPLAY_API_KEY,
      })
      return config
    },
  },
})
