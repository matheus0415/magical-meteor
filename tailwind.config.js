// tailwind.config.js
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // Adjust for your project's file types
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
