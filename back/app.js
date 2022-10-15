const express=require("express");
const app = express();

// para garantizar que pueda leer los registros json
app.use(express.json()); 

// importar rutas
const productos=require("./routes/products")

app.use('/api', productos)

module.exports=app