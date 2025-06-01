const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      console.log('✅ Webpack client config is used');

      config.plugins.push(
        new ModuleFederationPlugin({})
      );
    }

    return config;
  },
};

module.exports = nextConfig;
