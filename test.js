let express = require('express')
let ourAppServer = express()
ourAppServer.use(express.urlencoded({ extended: false }))

ourAppServer.get('/', function (request, response) {
  response.send(`
  <form action = "/answer" method = "POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
  <form>
  `)
})

ourAppServer.post('/answer', function (request, response) {
  if (request.body.skyColor == 'blue') {
    response.send(`
      <p>Congrats, that is the correct answer!</p>
      <a href="/">Back to homepage</a>
    `)
  } else {
    response.send(`
      <p>Sorry, that is incorrect.</p>
      <a href="/">Back to homepage</a>
    `)
  }
})
ourAppServer.listen(3000)
