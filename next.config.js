/** @type {import('next').NextConfig} */
const nextConfig = {
  // MUST be at the top level, not inside experimental
  // We include the IP with and without the port to be safe
  allowedDevOrigins: [
    '192.168.1.141', 
    '192.168.1.141:3001', 
    'localhost:3001'
  ],

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;  