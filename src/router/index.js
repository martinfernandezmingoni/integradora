const cartsController = require('../carts/controller.carts')
const productsController = require('../products/controller.products.js')

const router = app => {
  app.use('/products', productsController)
  app.use('/carts', cartsController)
}

module.exports = router