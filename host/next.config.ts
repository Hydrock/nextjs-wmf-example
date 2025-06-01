const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // eslint-disable-next-line
  // @ts-ignore
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
