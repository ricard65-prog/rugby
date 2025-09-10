module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Rugby Heritage Green
        primary: {
          DEFAULT: "#1B5E20", // green-900
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
        },
        // Secondary Colors - Interactive Elements
        secondary: {
          DEFAULT: "#2E7D32", // green-800
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
        },
        // Accent Colors - Achievement Gold
        accent: {
          DEFAULT: "#FFB300", // amber-600
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFCA28", // amber-400
          500: "#FFC107", // amber-500
          600: "#FFB300", // amber-600
          700: "#FFA000", // amber-700
          800: "#FF8F00", // amber-800
          900: "#FF6F00", // amber-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-600
        },
        // Status Colors
        success: "#4CAF50", // green-500
        warning: "#FF9800", // orange-500
        error: "#F44336", // red-500
        // Border Colors
        border: {
          DEFAULT: "#E0E0E0", // gray-300
          light: "#F5F5F5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'rugby': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'rugby-card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'rugby-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'rugby-roll': 'rugbyRoll 800ms ease-in-out infinite',
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
      },
      keyframes: {
        rugbyRoll: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'rugby': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'rugby': '8px',
      },
      borderRadius: {
        'rugby': '12px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          'transition': 'all 300ms ease-in-out',
        },
        '.rugby-field-pattern': {
          'background-image': `
            linear-gradient(90deg, #C8E6C9 1px, transparent 1px),
            linear-gradient(#C8E6C9 1px, transparent 1px)
          `,
          'background-size': '20px 20px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}