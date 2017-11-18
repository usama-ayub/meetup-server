import mongoose from 'mongoose';
const url = `mongodb://admin:admin@ds129610.mlab.com:29610/test-db`;

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(url);
    mongoose.connection
        .once('open', () => console.log('mongodb run'))
        .on('err', err => console.error('error',err));
}