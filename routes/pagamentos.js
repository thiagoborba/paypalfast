module.exports = (app) => {
  app.get('/pagamentos', (req, res) =>{
    console.log('recebida requisicao de teste na porta 3000')
    res.send('OK')
  })
}