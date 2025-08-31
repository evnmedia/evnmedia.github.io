// next.config.mjs — GitHub Pages (root site)

let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore if the override file doesn't exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a fully static site in ./out for GitHub Pages
  output: 'export',

  // Make URLs resolve to .../index.html
  trailingSlash: true,

  // GitHub Pages doesn't run Next's image optimizer
  images: { unoptimized: true },

  // Keep v0 defaults
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) return
  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = { ...nextConfig[key], ...userConfig[key] }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
