/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.[html, js]"],
  theme: {
    fontSize: {
      sm: ['20px', '21px'],
      base: ['24px', '25px'],
      lg: ['28px', '29px'],
      xl: ['32px', '33px'],
      '2xl': ['36px', '38px'],
      '3xl': ['40px', '42px'],
      '4xl': ['44px', '50px'],
      '5xl': ['52px', '62px'],
      '6xl': ['100px', '120px'],
    },
    fontFamily: {
      'SFPro-Round-Black': ['SFPro-Round-Black','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Bold': ['SFPro-Round-Bold','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Heavy': ['SFPro-Round-Heavy','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Light': ['SFPro-Round-Light','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Medium': ['SFPro-Round-Medium','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Regular': ['SFPro-Round-Regular','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Semibold': ['SFPro-Round-Semibold','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Thin': ['SFPro-Round-Thin','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Ultralight': ['SFPro-Round-Ultralight','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Display-Black': ['SFPro-Display-Black', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-BlackItalic': ['SFPro-Display-BlackItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Bold': ['SFPro-Display-Bold', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-BoldItalic': ['SFPro-Display-BoldItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Heavy': ['SFPro-Display-Heavy', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-HeavyItalic': ['SFPro-Display-HeavyItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Light': ['SFPro-Display-Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-LightItalic': ['SFPro-Display-LightItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Medium': ['SFPro-Display-Medium', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-MediumItalic': ['SFPro-Display-MediumItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Regular': ['SFPro-Display-Regular', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-RegularItalic': ['SFPro-Display-RegularItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Semibold': ['SFPro-Display-Semibold', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-SemiboldItalic': ['SFPro-Display-SemiboldItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Thin': ['SFPro-Display-Thin', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-ThinItalic': ['SFPro-Display-ThinItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-Ultralight': ['SFPro-Display-Ultralight', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Display-UltralightItalic': ['SFPro-Display-UltralightItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Black': ['SFPro-Text-Black', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-BlackItalic': ['SFPro-Text-BlackItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Bold': ['SFPro-Text-Bold', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-BoldItalic': ['SFPro-Text-BoldItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Heavy': ['SFPro-Text-Heavy', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-HeavyItalic': ['SFPro-Text-HeavyItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Light': ['SFPro-Text-Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-LightItalic': ['SFPro-Text-LightItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Medium': ['SFPro-Text-Medium', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-MediumItalic': ['SFPro-Text-MediumItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Regular': ['SFPro-Text-Regular', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-RegularItalic': ['SFPro-Text-RegularItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Semibold': ['SFPro-Text-Semibold', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-SemiboldItalic': ['SFPro-Text-SemiboldItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Thin': ['SFPro-Text-Thin', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-ThinItalic': ['SFPro-Text-ThinItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-Ultralight': ['SFPro-Text-Ultralight', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'SFPro-Text-UltralightItalic': ['SFPro-Text-UltralightItalic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}