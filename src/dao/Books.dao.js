const Books = require("./models/Books.model")

class BooksDao {
  constructor(){}

  async findAll(){
    try {
      return await Books.find()
    } catch (error) {
      return error
    }
  }

  async createMany (newBooksInfo) {
    try {
      return await Books.insertMany(newBooksInfo)
    } catch (error){
        return error
    }
  }

  async create(newBookInfo){
    try {
      return await Books.create(newBookInfo)
    } catch (error) {
      return error
    }
  }

  async deleteAll(){
    return await Books.deleteMany()
  }

}

module.exports = BooksDao