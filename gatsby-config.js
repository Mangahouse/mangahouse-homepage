module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
        icon: './favicon.ico',
        start_url: '/',
      }
    }
  ]
};
