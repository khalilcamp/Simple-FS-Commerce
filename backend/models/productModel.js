import mongoose from "mongoose";

//criando um schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true //cria um campo de data de criação e de atualização
});

// Criando uma coleção. O primeiro argumento é o nome da coleção e o segundo é o schema
const Product = mongoose.model('Product', productSchema);

export default Product;