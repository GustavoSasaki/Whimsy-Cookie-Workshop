import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          DEFAULT: "rgb(var(--color-hero) / <alpha-value>)",
          dark: "rgb(var(--color-hero-dark) / <alpha-value>)",
          typograph: "#CDE8C5"
        },
        contact: {
          DEFAULT:'#F64141'
        },
        introduction: {
            DEFAULT:'#497B7A',
            light:'#5D9A99',
            lighter:'#83C9C8',
            lightest:'#c8e7f2'

        },
        about: {
          DEFAULT: '#f48f00',
          light: '#f7ac1f',
          lighter:'#fff2c4'
        },
        cookie:{
          DEFAULT:'#503824'
        }
      },
      animation:{
        tilt: 'tilt 10s infinite linear'
      },
      keyframes: {
        goUp: {
          '0%': { 
            transform: 'translate(0,100vh)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translate(0,0), opacity(100)',
            opacity: '100%'
         },
        },
        goDown: {
          '0%': { 
            transform: 'translate(0,-100vh)',
            opacity: '0'
          },
          '40%': {
            opacity: '90%'
          },
          '100%': { 
            transform: 'translate(0,0), opacity(100)',
            opacity: '100%'
         },
        },
        
        goUpCookie: {
          '0%': { 
            transform: 'translate(0,100vh)',
          },
          '100%': { 
            transform: 'translate(0,0), opacity(100)',
         },
        },
        tilt: {
          "0%, 50%, 100%":{
            transform: 'rotate(0deg)'
          },
          "25%":{
            transform: 'rotate(2deg)'
          },
          "75%":{
            transform: 'rotate(-2deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
