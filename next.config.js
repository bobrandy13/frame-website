/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.istockphoto.com",
      "www.ikea.com",
      "i.ebayimg.com",
      "images.unsplash.com",
      "assets.bluethumb.com.au",
      "upload.wikimedia.org",

    ],
  },
};

module.exports = nextConfig;
