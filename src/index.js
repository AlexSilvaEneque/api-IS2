import express from 'express'
import { PORT } from './config/index.js'
import cors from 'cors'
import authroute from './routes/auth.routes.js'
import thabitacionroute from './routes/tipoHabitacion.routes.js'
import userroute from './routes/user.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', authroute)
app.use('/tipohabitaciones', thabitacionroute)
app.use('/users', userroute)

app.listen(PORT)
console.log('Corriendo')