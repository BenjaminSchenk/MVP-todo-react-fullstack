const express = require('express');
const cors = require('cors');
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT
const path = require('path')


const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

const publicFolderPath = path.join(__dirname, 'client', 'public');
app.use(express.static(publicFolderPath));
app.use(cors())
app.use(express.json())


app.get('/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos')
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status.send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on', PORT)
})