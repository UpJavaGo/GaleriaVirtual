const express=require("express")
const router=express.Router();

const {getProducts}=require("../controllers/productsController")  //traer la respuesta json desde el controlador

router.route('/products').get(getProducts)  // la ruta para ver el getprodtcs

module.exports=router;
