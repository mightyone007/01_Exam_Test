const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://authUser:123456A@ds143241.mlab.com:43241/auth', { useNewUrlParser: true })
    .then(()=> console.log('DB is connected.'))
    .catch(err=>console.log(err));

module.exports = mongoose;