const cartsController = require('../carts/controller.carts')
const productsController = require('../products/controller.products.js')
const messagesController = require('../messages/controller.messages.js')

const router = app => {
  app.use('/products', productsController)
  app.use('/carts', cartsController)
  app.use('/messages', messagesController)
}

module.exports = router