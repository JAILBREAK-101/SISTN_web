/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'sistn-green': '#3CB043', 
          'sistn-blue': '#1C3C83',   
          'sistn-gray': '#E0E5EB',   
          'sistn-dark-blue': '#003366', 
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        fontSize: {
          // Define font sizes across the project
          xs: ['0.75rem', { lineHeight: '1.2rem' }],  // Smallest
          sm: ['0.875rem', { lineHeight: '1.4rem' }], // Small
          base: ['1rem', { lineHeight: '1.6rem' }],   // Default (Body)
          lg: ['1.125rem', { lineHeight: '1.75rem' }],// Large
          xl: ['1.25rem', { lineHeight: '1.85rem' }], // Extra Large
          '2xl': ['1.5rem', { lineHeight: '2rem' }],  // Heading
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // Larger Heading
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // Even Larger
          '5xl': ['3rem', { lineHeight: '1' }],       // Largest Heading
        },
        maxWidth: {
          '20ch': '20ch',
          '30ch': '30ch',
          '40ch': '40ch',
          '50ch': '50ch',
          '60ch': '60ch',
          '70ch': '70ch',
          '80ch': '80ch',
          '90ch': '90ch',
          '100ch': '100ch'
        },
        minWidth: {
          '300px': '300px',
          '400px': '400px',
          '500px': '500px',
          '600px': '600px',
          '700px': '700px',
          '800px': '800px',
          '900px': '900px',
          '1000px': '1000px'
        },
        resize: {
          'resize': 'none'
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.700'),
              h1: {
                fontSize: theme('fontSize.4xl'),
                lineHeight: theme('lineHeight.tight'),
                fontWeight: '700',
              },
              h2: {
                fontSize: theme('fontSize.3xl'),
                lineHeight: theme('lineHeight.snug'),
                fontWeight: '600',
              },
              p: {
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.relaxed'),
                marginBottom: '1.25rem',
              },
              a: {
                color: theme('colors.blue.500'),
                textDecoration: 'underline',
                '&:hover': {
                  color: theme('colors.blue.600'),
                },
              },
            },
          },
        }),
      },
    },
    plugins: [],
  }
  