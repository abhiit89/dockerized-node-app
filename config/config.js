module.exports = {
  MONGO_HOST: process.env.MONGO_HOST || "mongo",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_INITDB_ROOT_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD,
};
