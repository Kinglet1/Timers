const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								require('postcss-cssnext')({
									features: {
										customProperties: {
											variables: {
												'color-primary': 'var(--palette-pink-50)'                                               //theme for react-toolbox
											},
										},
									}
								}),
								require('postcss-import')                                                                           //for import in css
							],
						},
					},
				],
			}
		]
	}
};
