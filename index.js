import express from 'express'

const app = express()

//req = requisição , res= resposta .
app.get('/busca', (req, res) => {
    console.log(req)
  res.send('Olá Mundo')
})


app.get('/busca/:id', (req, res) => {
    const numero = req.params.id
    console.log(numero)
    const mensagem = `O número requisitado é :${numero}`

  res.send(mensagem)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})