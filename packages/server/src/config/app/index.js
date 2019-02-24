import DotEnv from 'dotenv';

DotEnv.config();

const {
  env: {
    NODE_ENV,
    PORTAL_PORT,
    MYSQL_DB_NAME,
    MYSQL_DB_USER_NAME,
    MYSQL_DB_USER_PASS,
  },
} = process;

// eslint-disable-next-line
console.log(`
  NODE_ENV: ${NODE_ENV}
  PORTAL_PORT: ${PORTAL_PORT}
`);
export {
  NODE_ENV,
  PORTAL_PORT,
  MYSQL_DB_NAME,
  MYSQL_DB_USER_NAME,
  MYSQL_DB_USER_PASS,
};
