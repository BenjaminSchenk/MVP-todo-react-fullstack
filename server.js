const express = require('express');
const cors = require('cors');
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const publicFolderPath = path.join(__dirname, 'client', 'build');
app.use(express.static(publicFolderPath));

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

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

app.get('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id])
        if (result.rowCount === 0) {
            res.status(404).send('Not found make sure you spelled it correctly.')
        } else {
            res.status(200).send(result.rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.post('/todos', async (req, res) => {
    const { item } = req.body
    try {
        const result = await pool.query('INSERT INTO todos (item) VALUES ($1)', [item])
        res.status(201).send('New todo added.')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { item } = req.body
    try {
        const result = await pool.query('UPDATE todos SET item = $1 WHERE id = $2', [item, id])
        res.status(201).send('Todo updated.')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query('DELETE FROM todos WHERE id = $1', [id])
        res.status(201).send('Todo has been completed.')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on', PORT)
})