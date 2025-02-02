import express from "express";
import  {deleteProducts, getProducts, updateProducts} from "../controllers/productController.js";
import  {postProducts} from "../controllers/productController.js";

const router = express.Router();

// URL
router.get("/", getProducts);
router.post("/", postProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts);

export default router