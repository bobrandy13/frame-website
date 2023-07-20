/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 100,
  reactStrictMode: true,
  images: {
    domains: [
      "media.istockphoto.com",
      "www.ikea.com",
      "i.ebayimg.com",
      "images.unsplash.com",
      "assets.bluethumb.com.au",
      "upload.wikimedia.org",
      "picsum.photos",
      "storage.googleapis.com"
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
