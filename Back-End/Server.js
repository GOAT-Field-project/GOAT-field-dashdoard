const express = require('express')
const cors = require('cors')
const port = 5151;


const app = express()
const pool = require('./db')

// middleware 
app.use(cors())
app.use(express.json())

//! --------------------------------majd-------------------------------------------


app.get('/bookings', async (req, res) => {

    try {

        const allbookings = await pool.query("SELECT * FROM bookings WHERE deleted = false ")
        res.json(allbookings)
 
    } catch (err) {
        console.error(err.message);
    }
}) 

app.put('/bookings/:id', async (req, res) => {
    const { id } = req.params;

    try {
 
        const softdeletebooking = await pool.query("UPDATE bookings SET deleted = true WHERE id=$1", [id])
        res.json('booking is deleted')
    } catch (err) {
        console.error(err.message);
    }
})

app.delete('pitch/:id', async (req, res) => {
    try {

        await pool.query("DELETE FROM pitch WHERE id =$1 ", [id])
        res.json('your pitch is declained ')
    } catch (err) {
        console.error(err.message);

    }
})



//! --------------------------------mais-------------------------------------------
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


//  update a data
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
