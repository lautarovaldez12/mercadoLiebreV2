const productos = require('../data/productos')


module.exports = {
    index : (req, res) =>{

        let descuentos = function(descuento,precio){
            let desc = (descuento / 100) * precio;
            return precio - desc

        };

        const toThousand = n =>
        n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
        ".");


        res.render('index', {
            productos,
            descuentos,
            toThousand
        })


    }
}