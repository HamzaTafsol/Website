/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;

//   use: [
//     {
//       loader: "babel-loader",
//       options: {
//         presets: ["preact", "env"],
//       },
//     },
//     {
//       loader: "@svgr/webpack",
//       options: { babel: false },
//     },
//   ],
// });
