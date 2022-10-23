const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProdcuct, deleteProduct}=require("../controllers/productsController")  //traer la respuesta json desde el controlador

router.route('/products').get(getProducts)  // la ruta para ver el getprodtcs
router.route('/producto/nuevo').post(newProduct); // la ruta 
router.route('/producto/:id').get(getProductById);
router.route('/producto/:id').put(updateProduct); // creacion ruta de actualziacion
router.route('/producto/:id').delete(deleteProduct); // creacion ruta eliminacion 

module.exports=router;
