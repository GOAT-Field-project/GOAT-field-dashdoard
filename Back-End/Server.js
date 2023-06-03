const express = require('express')
const cors = require('cors')

const app = express()
const pool = require('./db')

// middleware 
app.use(cors())
app.use(express.json())

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

app.listen(4000, ()=>{
    console.log('server started on port 4000');
})