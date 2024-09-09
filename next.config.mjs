const nextConfig = {
    images: {
      domains: ["pbs.twimg.com", "images.sh-cdn.com"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**", 
        },
      ],
    },
  };

export default nextConfig;
