module.exports = ({ env }) => ({
  connection: {
  client: "postgres",
  connection: {
  connectionString: env('DATABASE_URL', 'postgresql://rscinfrastructure:WoOvdq7XfZPOzoTvAqlJ@db-rcd-prod-strapi2.postgres.database.azure.com:5432/postgres'),
  host: env('DATABASE_HOST', '172.16.14.197'),
  port: env.int('DATABASE_PORT', 5432),
  database: env('DATABASE_NAME', 'postgres'),
  username: env('DATABASE_USERNAME', 'rscinfrastructure'),
  password: env('DATABASE_PASSWORD', 'WoOvdq7XfZPOzoTvAqlJ'),
  ssl: env('DATABASE_SSL', false)
  },
  acquireConnectionTimeout: 1000000,
  pool: {
  min: 0,
  max: 5,
  acquireTimeoutMillis: 300000,
  createTimeoutMillis: 300000,
  destroyTimeoutMillis: 300000,
  idleTimeoutMillis: 30000,
  reapIntervalMillis:1000,
  createRetryIntervalMillis: 2000
  },
  debug: false,
  },
  });
