const producto=require("../models/productos")
const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); // usurpacion del requiere

// ver lista de productos
//exports.getProducts=(req, res, next) => { // puede que necesite algo (require), responsa algo (response),  o haga algo despues (next)
//    res.status(200).json({
//        sucess:true,
//        message: "En esta ruta podra ver todos los productos"
//    })
//}

exports.getProducts=async(req, res, next) => {
    const productos=await producto.find(); 
    res.status(200).json({
        sucess:true,
        count: productos.length,
        productos
    })
}

// ver producto por id

exports.getProducts=async(req, res, next) => {
    const product=await producto.findById(req.param.id)
        if (!product){
            return res.status(404).json({ // no lo encontre
                sucess:false,
                message:"No se encontro el producto."
            })
        }
        res.status(200).json({
            sucess:true,
            message:"Aqui encuentra informacion sobre el producto deseado",
            product
        })
    }

// update de un producto

exports.updateProduct = async(req, res, next)=>{
    let product=await producto.findById(req.param.id) // se verifica si existe el prodcuto
    if (!product){
        return res.status(404).json({ // no lo encontre
            sucess:false,
            message:"No se encontro el producto."
        })
    }
// si el prducto existe se hace update
    product = await producto.findByIdAndUpdate(req.param.id, req.body, {
        new:true, // se valida solo lo actualziado
        runValidators:true
    });
//  respondo ok si el producto se actalizo
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente.",
        product
    })
}

// eliminar un producto
exports.deleteProduct = async(req, res, next)=>{
    const product=await producto.findById(req.param.id) // se verifica si existe el prodcuto
    if (!product){
    return res.status(404).json({ // no lo encontre
        sucess:false,
        message:"No se encontro el producto."
        })
    }
    await product.remove();
    return res.status(200).json({
        sucess:true,
        message:"Producto eliminado correctamente.",
    })
}    



// crear nuevo producto /api/productos
exports.newProduct=async(req, res, next) => { // puede que necesite algo (require), responsa algo (response),  o haga algo despues (next)
    const product=await producto.create(req.body);

    res.status(201).json({
        sucess:true
    })
}

// fetch
// ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); // llamar el metodo para probar la consulta


// ver por id
function verProductosPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
}

//verProductosPorId('634d6c5695748a39861faf2d') // probamos el metodo



