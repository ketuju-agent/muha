import initializeBundleAnalyzer from '@next/bundle-analyzer';
import createConfig from '@tooling/nextjs-config';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

export default withBundleAnalyzer(createConfig({}));
