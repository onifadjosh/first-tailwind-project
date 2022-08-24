/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    fontFamily: {
      'display': [ "Nunito"  ],
      'body': ['"Open Sans"', ],
    },

    

    screens:{
      sm: '280px',
      // md: '480px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'cyan-blue': '#1A2530',
        'primcol': '#B89B5E',
        'grayish-blue': '#293138',
        'dark-blue': '#1A2530',
      },

      height: {
        '1/2-screen': '50vh',
      },

      backgroundImage: {
        'hero-image': "url('images/header-background.jpg')",
        
      }
    },
  },
  plugins: [],
}
