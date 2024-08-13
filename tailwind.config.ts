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
          dark: '#272938'
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
        'inner-outer': 'inset 0 0px 8px rgba(45, 47, 54, 1)',
      },
      flexGrow: {
        '2': '2', // Custom value for flex-grow
      },
    },
  },
  plugins: [],
};
export default config;
