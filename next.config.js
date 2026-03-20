const nextConfig = {
  // Enable experimental features for multi-domain
  experimental: {},
  // For local dev, map brands via headers
  async headers() {
    return [];
  },
};

export default nextConfig;
