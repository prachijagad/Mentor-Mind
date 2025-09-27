require('dotenv').config();
// console.log(process.env);
const Pool = require('pg-pool');      //connection pool for node-postgres
const express = require('express');
const app = express();

const pool = new Pool({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
})

app.get('/courses', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM courses');
        res.json(result.rows);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});