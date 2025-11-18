export default {
  async proxies() {
    return [
      {
        path: "/api/:path*",
        destination: "https://your-backend.com/api/:path*",
      },
    ];
  },
};
