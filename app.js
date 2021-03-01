const express = require('express');
const app = express();
const path = require('path')


const usersRouter = require('./routes/users')
const cardsRouter = require('./routes/cards')


// listen to port 3000
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public' )))

app.use('/cards', cardsRouter);
app.use('/users', usersRouter)
 
app.get('*', (req, res) => {
  res.status(404).send({ message: "Page not found" });
}) 


app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`)
}) 