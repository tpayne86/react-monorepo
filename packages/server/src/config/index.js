
import DotEnv from 'dotenv';

DotEnv.config();

const { env: { NODE_ENV, PORTAL_PORT } } = process;

// eslint-disable-next-line
console.log(`
  NODE_ENV: ${NODE_ENV}
  PORTAL_PORT: ${PORTAL_PORT}
`);

export {
  NODE_ENV,
  PORTAL_PORT,
};
