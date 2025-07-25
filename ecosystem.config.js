module.exports = {
  apps: [
    {
      name: "welcome_page",
      script: "bun",
      args: "run start",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3000 // Change this if you want a different port
      }
    }
  ]
};
