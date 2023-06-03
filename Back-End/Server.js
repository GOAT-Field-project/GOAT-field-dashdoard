const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const port = 5151;

// Middleware
app.use(cors());
app.use(express.json());

// Get users data
app.get('/usersData', async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add user data
app.post('/addUser', async (req, res) => {
    try {
        const { user_name, user_email, user_password, role } = req.body;

        const addUser = await pool.query(
            "INSERT INTO users(user_name, user_email, user_password, role) VALUES ($1, $2, $3, $4) RETURNING *",
            [user_name, user_email, user_password, role]
        );

        res.json(addUser.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "An error occurred while processing the request." });
    }
});


// ! update a data
app.put("/updateUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { user_name, user_email, user_password, role } = req.body;

        const updateUser = await pool.query(
            "UPDATE users SET user_name = $1, user_email = $2, user_password = $3, role = $4 WHERE user_id = $5 RETURNING *",
            [user_name, user_email, user_password, role, id]
        );

        res.json(updateUser.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "An error occurred while updating the user." });
    }
});



app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
