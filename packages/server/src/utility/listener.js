import { PORT } from '../config';

const serverListener = (err) => {
  if (err) {
    throw new Error('express bootstrap failed');
  } else {
    console.log("application listening at ", PORT); //eslint-disable-line
  }
};

export {
  serverListener, // eslint-disable-line
};
