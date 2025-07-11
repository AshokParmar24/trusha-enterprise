// next.config.js
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false, // Disable TurboPack
  },
  webpack: (config, { isServer }) => {
    // Example: Add support for .txt files
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });

    // Example: Add custom alias
    config.resolve.alias["components"] = path.join(__dirname, "components");

    return config;
  },
};

export default nextConfig;
