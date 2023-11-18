const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.vw25nz0.mongodb.net/social';

connect(connectionString);

module.exports = connection;
