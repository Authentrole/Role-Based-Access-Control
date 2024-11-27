const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected: ${connect.connection.host}, Database: ${connect.connection.name}`);
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = dbConnect;
