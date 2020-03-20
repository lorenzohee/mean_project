module.exports = {
  apps: [
    {
      name: "innovationRoad",
      script: "./server/index.js",
      watch: true,
      ignore_watch : [ "../logs", "../node_modules","../.git", "../sessions","../sessions/*", "../private/files/**/*", "../private/imgs/**/*" ],
      env_development: {
        // "PORT": 3030,
        "NODE_ENV": "development",
        "ENV_CONFIG": "dev",
      },
      env_uat: {
        // "PORT": 3030,
        "NODE_ENV": "uat",
        "ENV_CONFIG": "uat",
      },
      env_pre: {
        // "PORT": 80,
        "NODE_ENV": "pre",
        "ENV_CONFIG": "pre",
      },
      env_production: {
        // "PORT": 80,
        "NODE_ENV": "production",
        "ENV_CONFIG": "prod",
      }
    }
  ]
}