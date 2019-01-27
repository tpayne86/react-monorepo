import path from 'path';

const getStaticPath = (postfix = '') => path.resolve(__dirname, '../', `./public/${postfix}`);

export default getStaticPath;
