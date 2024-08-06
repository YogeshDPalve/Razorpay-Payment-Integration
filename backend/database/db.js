import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect(process.env.DB_URL, {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
        console.log("Database connection error");
        
    }
}

export default connectToMongo;