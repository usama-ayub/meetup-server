import mongoose from 'mongoose';

import config from './config';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.DB_URL);
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => console.log('mongodb run'))
    .on('err', err => console.error('error', err));
};
