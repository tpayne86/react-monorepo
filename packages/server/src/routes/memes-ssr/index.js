import { Router } from 'express';
import fs from 'fs';
import React from 'react'; // eslint-disable-line
import ReactDOMServer from 'react-dom/server'; // eslint-disable-line
import APPP from '@healthifyme/memes-ssr/src/App/Layout'; // eslint-disable-line
import getStaticPath from '../../utility/static-path';
// import App from '../../components/memes-ssr';  // eslint-disable-line
const indexFile = getStaticPath('memes-ssr');

const router = Router();

router.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<APPP />);  // eslint-disable-line
  fs.readFile(`${indexFile}/index.html`, 'utf8', (err, file) => {
    if (err) {
      res.status(500).send('Some error occured');
    } else {
      res.send(
        file.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
      );
    }
  });
});
export default router;
