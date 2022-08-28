/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    fontFamily: {
      'display': [ "Nunito"  ],
      'body': ['"Open Sans"', ],
    },

    

    screens:{
      sm: '280px',
      md: '500px',
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

      flexBasis: {
        '66.6': '66.2857143%',
       
      },

      height: {
        '1/2-screen': '50vh',
        '70': '70vh',
      },

      backgroundImage: {
        'hero-image': "url('images/header-background.jpg')",
        'footer-image': "url('images/footer.jpg')",
        
      }
    },
  },
  plugins: [],
}
