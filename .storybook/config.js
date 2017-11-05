import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Flashcards',
  showDownPanel: false
})

// webpack trick to glob-require
const req = require.context('../src', true, /(\.story\.js$)|(\.story\.jsx$)/)

configure(() => {
  require('../src/index.css')
  req.keys().forEach(filename => req(filename))
}, module)
