import express from "express";
const router = express.Router();
import { getProducts } from "./controller.js";
import { getProductsById } from "./controller.js";
import { addproducts } from "./controller.js";
import { deleteproducts } from "./controller.js";
import { updateproducts } from "./controller.js";
const products = [{id :'1', name: 'bus', cat_id: '2' },
               {id :'3', name: 'iphone', cat_id: '1' }];
//Get api
router.get('/products', getProducts);
// Get by id api
router.get('/products/:id', getProductsById);
// Post api
router.post('/addproducts' , addproducts);
// Delete api
router.delete('/deleteproducts/:id', deleteproducts);
// Update api
router.put('/updateproducts/:id', updateproducts);
export default router;