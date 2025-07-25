/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'shadow':'#00000090',
      },
      maxWidth:{
         '1000px':'1000px'
      },
      gridTemplateColumns: {
        'custom-layout': '1.2fr 1.8fr 1fr',
      },
      borderRadius:{
        '50%':'50%',
        'customS': '3px 3px 0px',
        'customR': '3px 3px 3px 0px'
      },
      height:{
        '75vh':'75vh'
      },
      width:{
        "95%":'95%',
        '356px':'356px',
      },
      minWidth:{
        '700px':'700px'

      },
      backgroundImage:{
        customBg:'url(public/background.png)',
      },
      colors:{
        customBlack:'#121212',
        customBlue:'#077eff',
        customGrey:'#3c3e48',
        textColor:'#a6a4a4',
        borderColor:'#C9C9C9',
        
      },
      fontSize:{
        time:'.6875rem',
        msg:'14px'
      },
      lineHeight:{
        time:'0.5',

      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
}