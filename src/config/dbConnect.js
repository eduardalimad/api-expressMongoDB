import mongoose, {mongo} from "mongoose";

async function conectarbase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};
export default conectarbase;