const mongoose=require("mongoose") 

const productsSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "Por favor registre el nombre del producto."],
        trim:true,//eliminar nombres en blanco
        maxLength:[120, "El nombre de producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number, 
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio no debe ser superior de 99'9999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre la descripcion del producto."]
    },
    calificacion:{
        type: Number, 
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Cuidado e higiene",
                "Medicamentos",
                "Snacks",
                "juguetes"
            ]
        }
    },
    vendedor:{
        type:String
    },
    inventario:{
        type: Number,
        required:[true,"Por favor registre el stock del producto."],
        maxLength:[3, "La cantidad máxima del producto no debe ser superior de 999"],
        default:0
    },
    numCalificaciones:{
        type: Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ], 
    fechaCreacion:{
        type:Date,
        default:Date.now
    }   

})

module.exports=mongoose.model("productos",productsSchema)