import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/mikeTeste";

export default function connect() {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    mongoose.connection.on("disconnected", () => console.log("Database Disconnected"));

    mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000, //Aguarda 5 segundos
        maxPoolSize: 10,
    })
        .then(() => console.log("Connected to MongoDB"))
        .catch((e) => {
            console.error("Connection Failed", e.message);
        })
}

process.on("SIGINT", async () => {
    try {
        console.log("Connection closed");
        await mongoose.connection.close();
        process.exit(0);
    }
    catch (error) {
        console.error("Problems to close the Connection", error);
        process.exit(1);
    }
})