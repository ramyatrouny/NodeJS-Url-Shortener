const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true
        });

        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.messsage);
        process.exit(1);
    }
};

module.exports = connectDB;