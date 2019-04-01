module.exports = {
  __experimentalThemes: [
    "gatsby-theme-tomato"
  ],
  plugins: [
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-rebeccapurple"]
      }
    }
  ]
}
