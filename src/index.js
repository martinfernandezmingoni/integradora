const app = require('./app')
const {port} = require('./config/app.config')

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

module.exports = httpServer