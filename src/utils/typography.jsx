import Typography from 'typography';

const typography = new Typography({
  title: 'Martin Castre',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerFontFamily: ['Nunito', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'sans-serif'],
  headerWeight: 700,
  bodyWeight: 400,
  googleFonts: [
    {
      name: 'Nunito',
      styles: [ 300, 400, 700 ]
    },
    {
      name: 'Buenard',
      styles: [ 400 ]
    }
  ]
});

export default typography;