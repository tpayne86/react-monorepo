import proxy from 'http-proxy-middleware';

const apiProxy = proxy('/api', { target: 'http://localhost:8000' });
const staticProxy = proxy('/static', { target: 'http://localhost:8000' });

export { apiProxy, staticProxy };
