module.exports = {
	plugins: [
		'@hashinteractive/gatsby-theme-reactor',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/data/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /src/,
					exclude: /node_modules/,
				},
			},
		},
	],
	siteMetadata: {
		title: `Daniel M. Jordan`,
	},
};
