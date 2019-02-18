import { Router } from 'express';
// import fs from 'fs';
import React from 'react'; // eslint-disable-line
import ReactDOMServer from 'react-dom/server'; // eslint-disable-line
import App from '@healthifyme/memes-ssr/src'; // eslint-disable-line
// import getStaticPath from '../../utility/static-path';
// import App from '../../components/memes-ssr';  // eslint-disable-line
// const indexFile = getStaticPath('memes-ssr');

const router = Router();

router.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);  // eslint-disable-line
  res.send(app);
  // fs.readFile('./public/memes-ssr/index.html', 'utf8', (err, file) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Some error occured');
  //   } else {
  //     res.send(
  //       file.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
  //     );
  //   }
  // });
});
export default router;
