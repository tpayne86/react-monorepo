const path = require('path');

const getStaticPath = (postfix = '') => path.resolve(__dirname, '../', `public/${postfix}`);

module.exports = getStaticPath;
