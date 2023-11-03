/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  images: {
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig