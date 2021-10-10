const {
  theme: { fontSize, lineHeight, spacing }
} = require('tailwindcss/defaultConfig')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      CardShadow: '0px 16px 64px rgba(0, 0, 0, 0.1)'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1168px',
      // => @media (min-width: 1016px) { ... }

      xl: '1312px',
      // => @media (min-width: 1312px) { ... }

      '2xl': '1636px'
      // => @media (min-width: 1636px) { ... }
    },
    spacing: {
      1.5: '0.375rem',
      2.5: '0.625rem',
      4.5: '1.125rem',
      11.5: '2.875rem',
      18: '4.5rem',
      29: '7.25rem',
      30: '7.5rem',
      ...spacing
    },
    truncate: {
      lines: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    fontSize: {
      '2.5xl': '1.75rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      '6.5xl': '4rem',
      ...fontSize
    },
    lineHeight: {
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.5625rem',
      7.5: '1.875rem',
      7.75: '1.9375rem',
      10.5: '2.625rem',
      12: '3rem',
      12.5: '3.125rem',
      12.75: '3.25rem',
      titleInvestor: '88px',
      slideXl: '140px',
      ...lineHeight
    },
    extend: {
      screens: {
        card: '560px',
        cardForm: '400px',
        cardLeft: '268px',
        desAbout: '867px',
        cardAuthor: '258px',
        cardDownload: '400px',
        registerInvestor: '456px',
        questionSupport: '1088px'
      },
      zIndex: {
        100: '100',
        200: '200',
        999: '999'
      },
      colors: {
        clientBg: '#EFF2F6',
        bgFooter: '#071628',
        neutralDarkContent: {
          100: '#FFFFFF',
          200: 'rgba(255, 255, 255, 0.75)',
          300: 'rgba(255, 255, 255, 0.5)'
        },
        neutralDarkBg: {
          100: '#04080B',
          200: '#171A1C',
          300: 'rgba(255, 255, 255, 0.1)'
        },
        neutralDarkLine: {
          linePrimary: 'rgba(255, 255, 255, 0.3)',
          lineSecondary: 'rgba(255, 255, 255, 0.15)'
        },
        neutralLightContent: {
          100: '#161E31',
          200: '#888B96',
          300: '#C8CACF'
        },
        neutralLightBg: {
          100: '#FFFFFF',
          200: '#EDEFF0',
          300: '#F4F5F6'
        },
        neutralLightLine: {
          linePrimary: '#EFF0F0',
          lineSecondary: '#DFE0E1'
        },
        black: {
          a50: 'rgba(0, 0, 0, 0.05)',
          a500: '#000000',
          a400: 'rgba(0, 0, 0, 0.8)',
          a300: 'rgba(0, 0, 0, 0.5)',
          a200: 'rgba(0, 0, 0, 0.3)',
          a100: 'rgba(0, 0, 0, 0.1)'
        },
        white: {
          a500: '#FFFFFF',
          a400: 'rgba(255, 255, 255, 0.8)',
          a300: 'rgba(255, 255, 255, 0.5)',
          a200: 'rgba(255, 255, 255, 0.3)',
          a100: 'rgba(255, 255, 255, 0.1)'
        },
        brand: {
          a400: 'rgba(0, 102, 204, 0.8)',
          a300: 'rgba(0, 102, 204, 0.5)',
          a200: 'rgba(0, 102, 204, 0.3)',
          a100: 'rgba(0, 102, 204, 0.1)'
        },
        brandA100: 'rgba(233, 22, 110, 0.1)',
        blackVideo: '#2C2C2C',
        dark: {
          accent: '#008EEC',
          positive: '#31C375',
          negative: '#E42E2E',
          critical: '#FA8C16'
        },
        light: {
          accent: '#0066CC',
          positive: '#31C375',
          negative: '#E42E2E',
          critical: '#FA8C16'
        },
        bgLight: {
          positive: 'rgba(49, 195, 117, 0.1)',
          negative: 'rgba(228, 46, 46, 0.1)'
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'hover', 'focus'],
    overflow: ['responsive', 'hover'],
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    borderRadius: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js']
  }
}
