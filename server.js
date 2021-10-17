const express = require('express')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const app = express()
app.use(express.json())
app.use(cors())

const {PORT} = require('./config')

const userRuta = require('./routes/api/user')
app.use('/api/user', userRuta)

if(process.env.NODE_ENV === 'production'){
    app.use(history({verbose: true}))
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Escuchando en puerto: ${PORT}`))