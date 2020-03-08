const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-hashinteractive-gatsby-theme-reactor-templates-project-js": hot(preferDefault(require("/Users/danieljordan/Desktop/Projects/portfolio-page/src/@hashinteractive/gatsby-theme-reactor/templates/project.js"))),
  "component---src-hashinteractive-gatsby-theme-reactor-templates-default-js": hot(preferDefault(require("/Users/danieljordan/Desktop/Projects/portfolio-page/src/@hashinteractive/gatsby-theme-reactor/templates/default.js")))
}

