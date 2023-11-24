const express = require('express')
const app = express()
const port = 3000
const db = require('./connection')
const cors = require('cors')
const response = require('./response')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const { Pool } = require('pg')
const multer = require('multer')
const path = require('path')


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dewetour',
    password: "c4l35t14l",
    port: 3306, //
})


const storage = multer.diskStorage({
    destination: function (cd, req, file){
        cd(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage})

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')

    if(!token){
        res.status(401).json({message:"Unauthorized: No token provided"})
        // return res.redirect('/')
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if(err){
            res.status(403).json({message:"Forbidden: Invalid token"})
        }

        req.user = user;
  
    next();}); // Call next() to proceed to the next middleware/route handler
  };


// app.use('/api/trip/', authenticateToken);


//Declaration Routing in here !
//Get Methods
app.get('/api', (req, res) => {
    const sql = "SELECT * from trips"
    db.query(sql, (err, fields) => {
        if(err) throw err
        response(200, fields.rows, "Success", res)
    })
})

app.get('/api/trip/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const sql = `SELECT * from trips where trips.id  = ${id}`
    db.query(sql, (err, fields) => {
        console.log(fields.rows[0]);
        if(err) throw err
        response(200, fields.rows[0], 'Success', res)
    })
})

//Post methods
app.post('/api/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const sql = 'SELECT id, username, password FROM users WHERE email = $1';
        const {rows} = await pool.query(sql, [email])

        if(rows.length === 0){
            // console.log(rows)
            return res.status(401).json({message: "Invalid Credentials"})
        }
        const user = rows[0];

        const hashPassword = user.password
        // console.log('this after password hashed:',hashPassword)

        //password matching
        const passwordMatch = await bcrypt.compare(password, hashPassword)

        if(!passwordMatch){
            return res.status(401).json({message:"Invalid credentials"})
        }

        const token = jwt.sign({id:user.id, username: user.name}, 'resu', {
            expiresIn: '2h',
        })
        // console.log('this session token :', token);

        res.json({token, user})
    } catch (error) {
        console.error('Error while authenticating user:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.post('/api/register', async (req, res) => {
    const {username, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const checkUserSql = "SELECT * FROM users WHERE username = $1"
        const checkUserResult = await pool.query(checkUserSql, [username])

        if(checkUserResult.rows.length > 0){
            return res.status(400).json({message:"Username already exists"})
        }

        const insertUserSql = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id, username, email"
        const insertedUser = await pool.query(insertUserSql, [username, email, hashedPassword])

        const token = jwt.sign({id: insertedUser.rows[0].id, username: insertedUser.rows[0].username, email: insertedUser.rows[0].email}, 'resu', {
            expiresIn : '1h'
        });

        res.status(201).json({token});
    } catch (error) {
        console.error('Error while registering user:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.post('/addTrip', upload.single('image') ,async (req, res) => {
    const {destination_name, trip_name, price, total_photos, country, accomo, transport, eats, duration, quota, description, nduration} = req.body
    const image = req.file
    try {
        const insertTripSql = "INSERT INTO trips (destination_name, trip_name, price, total_photos, country, accomo, transport, eats, image, duration, quota, description, nduration) VALUES ($1,$2,$3$4,$5,$6,$7,$8,$9$10,$11,$12,$13 RETURNING destination_name, trip_name, price, total_photos, country, accomo, transport, eats, image, duration, quota, description, nduration)"
        const insertTrips = await pool.query(insertTripSql, [destination_name, trip_name, price, total_photos, country, accomo, transport, eats, image, duration, quota, description, nduration])
        

        console.log(insertTrips.rows[0])
        res.status(200).json({message:"Trip added successfully", data:insertTrips.rows[0]})
    } catch (error) {
        console.error('Error while registering user:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
})


app.listen(port, ()=> {
    console.log(`App is listening on port: ${port}`)
})