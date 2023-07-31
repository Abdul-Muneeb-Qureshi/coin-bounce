const express = require('express')
const app = express()
const {PORT} = require('./config/index')
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');



const dbConnect = require('./database/index');
const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(cookieParser());

app.use(router);




dbConnect();
app.use("/storage", express.static("storage"));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.use(errorHandler)