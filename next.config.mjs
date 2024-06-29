/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'landingpage.huglemon.com',
			},
		],
	},
};

export default nextConfig;
