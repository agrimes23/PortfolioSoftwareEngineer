import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  {
          light: '#b88dfc',
          DEFAULT: '#70e1f4', // ✅ UPDATED
          dark: '#853cfa',
        },
        secondary: {
          light: '#A3BFFA',
          DEFAULT: '#94ffef',  // Primary color
          dark: '#1E40AF',
        },
        accent:  {
          light: '#A3BFFA',
          DEFAULT: '#ffffff',  // Primary color
          dark: '#1E40AF',
        },
        neutral:  {
          light: '#626363',
          DEFAULT: '#35374B',  // ✅ UPDATED
          dark: '#242424',
        },
        neutralSecondary: {
          light: '#484b66',
          DEFAULT: "#35374B",
          dark: '#272938',
          loadingLight: "#3E4054",
          loadingDark: "#2E2F40"
        },
        info: {
          light: '#BFDBFE',
          DEFAULT: '#3B82F6',  // Info color (can be similar to primary)
          dark: '#1E3A8A',
        },
        warning: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',  // Warning color
          dark: '#B45309',
        },
        success: {
          light: '#BBF7D0',
          DEFAULT: '#10B981',  // Success color (can be similar to accent)
          dark: '#064E3B',
        },
        error: {
          light: '#FECACA',
          DEFAULT: '#EF4444',  // Error color
          dark: '#991B1B',
        }, 
      },
      boxShadow: {
        'white-glow': '0 4px 15px rgba(255, 255, 255, 0.8)',
        'neon-blue': '0 4px 15px rgba(148, 255, 239, 1)', // Adjust the RGBA value for the desired neon effect
      },
      flexGrow: {
        '2': '2', // Custom value for flex-grow
      },
    },
  },
  plugins: [],
};
export default config;
