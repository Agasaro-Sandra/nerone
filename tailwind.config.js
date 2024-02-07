/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        'linen': '#FCF2E9ff',
        'champagne-pink': '#D8C8BFff',
        'seashell': '#FFF7EFff',
        'pale-dogwood': '#D5BDB0ff',
        'cinereous': '#837770ff',
        'linen-2':'#F4ECE4ff',
        'bistre': '#261A0Bff',
        'linen': '#FCEFE3ff',
        'linen-2':'#F7E9DDff',
        'van-dyke': '#413832ff'
      },
      width:{
        '0.25':'1.5px',
        '25/54':'500px'
      },
      screens:{
        'xsm':'600px',
        'xmd':[
          {'max':'800px'}
        ]
      },
      borderWidth:{
        '35':'35px'
      },
      padding:{
        '20': '5rem',
      },
      lineHeight:{
        '8': '4.5rem',
        '7': '2rem'
      },
      margin:{
        '20':'60px',
      },
      minWidth:{
        '8/10':'80%',
      } ,
      height:{
        '8/10': '80%',
      }    
    },
  },
  plugins: [],
}

