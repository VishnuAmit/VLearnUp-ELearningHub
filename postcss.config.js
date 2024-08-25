// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'), // For global styles
    require('autoprefixer'),
    // Optional: Tailwind config for dashboard if needed
    require('tailwindcss')('./tailwind.dashboard.config.js')
  ],
};
