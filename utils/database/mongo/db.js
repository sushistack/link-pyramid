const mongoose = require('mongoose');

const MONGO_HOST = '127.0.0.1';
const MONGO_PORT = '27017';
const DB_NAME = 'link_pyramid';
const DB_CONNECT_OPTION = { useNewUrlParser: true, useUnifiedTopology: true };

let connection;

const connect = async () => {
  if (connection) {
    console.log('Cached Connection');
    return connection;
  }

  try {
    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}`, DB_CONNECT_OPTION);
    console.log('Connected to MongoDB');
    connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'Can not connect to MongoDB error:'));
    return connection;
  } catch (error) {
    console.error('Can not connect to MongoDB, error: ', error);
    return null;
  }
};

module.exports = { connect }
