import path from 'path'
import express from 'express'

const app = express()
const buildDir = path.join(process.cwd() + '/build')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(buildDir))

app.get('/home', (req, res) => {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.get('/health', (req, res) => {
    res.send({ status: 'healthy' })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(buildDir, 'index.html'))
})

export default app
