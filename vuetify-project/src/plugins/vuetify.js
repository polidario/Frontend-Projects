/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: colors.green.darken1,
          secondary: colors.grey.darken1
        }
      }
    }
  },
  defaults: {
    global: {
      ripple: false
    },
    VBtn: {
      style: 'border-radius: 4px; box-shadow: none; border: 0'
    },
    VCard: {
      elevation: 0,
      style: 'box-shadow: none'
    }
  }
})
