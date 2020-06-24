import config from "./config.json";

process.env.NODE_ENV === "production"
  ? console.log("Starting server in PRODUCTION environment!")
  : console.log("Starting server in DEVELOPMENT environment!");

export const db =
  process.env.NODE_ENV === "production"
    ? config.development.db
    : config.development.db;

export const jwtSecret = () => {
  return config.jwtSecret;
};
