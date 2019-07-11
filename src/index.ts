import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { loginRoute } from './routes'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['itiskey']}))
app.use(loginRoute)

app.listen(3000, () => console.log('Server starts listening at port 3000'))
