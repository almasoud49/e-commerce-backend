import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Everyone to My E-Commerce Backend Application!')
})

export default app
