const WindiCSS = require('windicss-webpack-plugin');
const { withAxiom } = require('next-axiom');

const ContentSecurityPolicy = `
  child-src *.google.com streamable.com;
  connect-src *;
  default-src 'self' *.rasyid.dev;
  font-src 'self';
  img-src * blob: data:;
  media-src 'none'; 

  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;
//   script-src 'self' 'unsafe-inline' *.rasyid.dev;
/**
 * @type {import('next').NextConfig}
 */
const config = {
	images: {
		domains: [
			// Discord assets
			'cdn.discordapp.com',

			// GitHub assets
			'raw.githubusercontent.com',

			// Spotify Album Art
			'i.scdn.co',

			// Streamable thumbnails
			'cdn-cf-east.streamable.com',

			// Unsplash
			'source.unsplash.com',
			'images.unsplash.com',

			// Cloudinary
			'res.cloudinary.com',
		],
	},
	// Inspired by: https://github.com/leerob/leerob.io/blob/main/next.config.js#L44-L81
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					// {
					// 	key: 'Content-Security-Policy',
					// 	value: ContentSecurityPolicy.replace(/\n/g, ''),
					// },
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { dev, isServer }) => {
		// TODO: Temp disabled as since upgrading `next` to v12.2.3 production builds fail & this seems to be the cause
		// Replace React with Preact only in client production build
		// if (!dev && !isServer) {
		// 	Object.assign(config.resolve.alias, {
		// 		react: 'preact/compat',
		// 		'react-dom/test-utils': 'preact/test-utils',
		// 		'react-dom': 'preact/compat',
		// 	});
		// }

		config.plugins.push(new WindiCSS());

		config.module.rules.push({
			test: /\.(glsl|vs|fs|frag|vert)$/,
			use: ['ts-shader-loader'],
		});

		return config;
	},
};

module.exports = withAxiom(config);
