import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({sucess: true, data: products});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const postProducts = async (req, res) => {
    const product = req.body; // usuario vai enviar
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({message: "Please fill all fields"});
    }
    // salvar no banco de dados
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({sucess: true, data: newProduct});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});

    }
};

export const deleteProducts = async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess: true, message: "Product deleted"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};

export const updateProducts =  async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Product not found"});
    }
    
    try {
        const updatedProduct = await
        Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({sucess: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
};