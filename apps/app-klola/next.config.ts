import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';
import createConfig from '@tooling/nextjs-config';

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

const nextConfig: NextConfig = createConfig({
    output: "standalone",
    transpilePackages: ["@packages/ui", "@packages/utils"],

});

export default withNextIntl(withBundleAnalyzer(nextConfig));
