/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@mui/material', '@mui/styles']); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

// module.exports = nextConfig;
// module.exports = withTM({nextConfig});
module.exports = withTM({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
});



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
