const express = require('express')
const dotenv = require('dotenv')

const userRouter = require('./Routes/userRoute')
const stateRouter = require('./Routes/stateRoute')
const districtRouter = require('./Routes/districtRoute')
const childRouter = require('./Routes/childRoute')

dotenv.config();

require('./dataBase/mongoose')

const app = express()


app.use(express.json())

app.use(userRouter)
app.use(stateRouter)
app.use(districtRouter)
app.use(childRouter)

app.listen(3000, () => {
    console.log('The server is up and running!')
})
