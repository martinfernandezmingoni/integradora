const usersController = require('../users/controller.users')
const booksController = require('../books/controller.books.js')

const router = app => {
  app.use('/books', booksController)
  app.use('/users', usersController)
}

module.exports = router