module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Technical authority and precision
        secondary: "#FFFFFF", // white - Clarity and breathing space
        accent: "#1a1a1a", // gray-900 - Subtle depth without distraction
        
        // Background Colors
        background: "#FFFFFF", // white - Clean content canvas
        surface: "#f8f8f8", // gray-50 - Gentle content separation
        
        // Text Colors
        'text-primary': "#000000", // black - Maximum readability
        'text-secondary': "#666666", // gray-500 - Information hierarchy
        
        // Status Colors
        success: "#22c55e", // green-500 - Positive project outcomes
        warning: "#f59e0b", // amber-500 - Important considerations
        error: "#ef4444", // red-500 - Clear problem identification
        
        // Border Colors
        'border-light': "#e5e5e5", // gray-200 - Form inputs and separation
        'border-emphasis': "#000000", // black - Active states and emphasis
        
        // Gray Scale for additional utility
        gray: {
          50: "#f8f8f8",
          100: "#f3f3f3",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#666666",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'code-type': 'typewriter 1000ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionDuration: {
        '300': '300ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}