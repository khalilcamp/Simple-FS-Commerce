import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        // conectando com a string de conexão
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 significa que saiu com erro
    }
};