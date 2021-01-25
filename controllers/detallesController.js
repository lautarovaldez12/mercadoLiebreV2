const productos = require('../data/productos')


module.exports = {
    detalle : (req,res) => {
        let producto = productos.find(productos => {
            return productos.id === Number(req.params.id) && productos.category === req.params.category
        })

        let descuentos = function(descuento,precio){
            let desc = (descuento / 100) * precio;
            return precio - desc

        } 

        const toThousand = n =>
        n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
        ".");

        
        res.render('detalle', {
            producto,
            descuentos,
            toThousand
        })
    }
}