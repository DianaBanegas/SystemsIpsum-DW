var express = require ('express');
var categorias = require ('../models/usuarios')
var router = express.Router();

router.get ('./',(req, res) => {
     res.status(200). send(
          ' Hola mundo'
     )
}
)

module.exports = router;