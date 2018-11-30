
import DotEnv from 'dotenv';

DotEnv.config();

const { env: { NODE_ENV, PORT } } = process;

// eslint-disable-next-line
console.log(`
  NODE_ENV: ${NODE_ENV}
  PORTAL_PORT: ${PORT}
`);

export {
  NODE_ENV,
  PORT,
};
