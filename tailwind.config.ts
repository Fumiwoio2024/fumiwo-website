import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: '0.625rem',
      },

      colors: {
        primaryBlack: '#12141D',
        textHeader: '#011456',
        primaryGreen: '#0BE781',
        linkGray: '#BAB7B7',
        paraGray: '#404F65',
        buttonGray: '#C4C4C426',
        contactGray: '#011556B2',
        logoGray: '#B9B3B3',
        alternativeGray: '#F4F7FA',
        offWhite: '#FAFAFA',
        buttonTextBlue: '#011556',
        inputLabel: '#061C3D',
        inputBorder: '#E6E8EC',
        bottomFooterBorder: '#8A8A8A'
      },
      boxShadow: {
        formShadow: '0px 16px 72px 0px #061C3D14',
        optionShadow: '0px 12px 16px 4px #10182814;'
      }
    },
  },
  plugins: [],
};
export default config;
