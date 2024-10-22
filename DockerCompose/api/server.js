// alndis
const express = require('express');
const cors = require('cors'); // Import CORS
const mysql = require('mysql');

const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json()); 

// Use CORS
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
}));

// Setup connection to MySQL
const db = mysql.createConnection({
    host: 'db', 
    user: 'user',
    password: 'user_password',
    database: 'mydatabase',
});

// Connect to the database with a retry mechanism
const connectToDatabase = () => {
    db.connect(err => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            setTimeout(connectToDatabase, 2000);
        } else {
            console.log('Connected to MySQL');
        }
    });
};

connectToDatabase();

// Simple API to get data
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM main_db', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

// API route for adding data
app.post('/api/add', (req, res) => {
    const { name, value } = req.body;
    const sql = 'INSERT INTO main_db (name, value) VALUES (?, ?)';

    db.query(sql, [name, value], (err, results) => {
        if (err) {
            console.error('Error adding data:', err);
            res.status(500).send('Error adding data');
        } else {
            res.status(201).json({ message: 'Data added successfully', id: results.insertId });
        }
    });
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the MySQL API!');
});

// Start the server
app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});
