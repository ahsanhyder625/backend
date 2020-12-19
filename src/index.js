const express = require('express')
const dotenv = require('dotenv')

const userRouter = require('./routes/userRoute')
const stateRouter = require('./routes/stateRoute')
const districtRouter = require('./routes/districtRoute')
const childRouter = require('./routes/childRoute')

dotenv.config();

require('./db/mongoose')

const app = express()


app.use(express.json())

app.use(userRouter)
app.use(stateRouter)
app.use(districtRouter)
app.use(childRouter)

app.listen(3000, () => {
    console.log('The server is up and running!')
})
