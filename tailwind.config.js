module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem'
      },
      borderWidth: {
        '14': '14px'
      }
    },
    container: {
      padding: '1rem'
    },
    fontFamily: {
      sans: [
        'Karla', 'Open Sans', 'sans-serif'
      ],
      serif: [
        'Rubik', 'Arial', 'sans-serif'
      ]
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  }
}
