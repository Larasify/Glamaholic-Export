// @ts-nocheck
/** @type {import("prettier").Config} */
const config = {
    plugins: ['prettier-plugin-astro', require.resolve("prettier-plugin-tailwindcss")],
  };
  
  module.exports = config;