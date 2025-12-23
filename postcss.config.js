export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting', // ¡Esta es la clave!
    tailwindcss: {},
    autoprefixer: {},
  }
}