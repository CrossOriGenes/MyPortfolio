const express = require('express')
const bodyParser = require('body-parser')
const Admin = require('../models/adminSchema')
const { generateToken, validateToken } = require('../utils/jwtUtils')

const router = express.Router()
const app = express()
app.use(bodyParser.json())

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const logged_user = await Admin.findOne({ username: username });
        // console.log(2, logged_user);
        if (logged_user) {
            bcrypt.compare(password, logged_user.password, (err, result) => {
                if (err) {
                    console.log(err);
                }
                // else {
                if (!result) {
                    console.log(30, "password didnot match");
                    res.status(400).json({ msg: "Invalid Username or Password" });
                }

                // const payload = {
                //     id: logged_user.id,
                // };

                // jwt.sign(payload, "shhh", { expiresIn: "10h" }, (err, token) => {
                //     res.status(200).json({
                //         token: token,
                //         message: "Login successful",
                //     });
                // });
                // Generate JWT token
                const token = generateToken(logged_user)

                res.json({
                    success: true,
                    message: 'Welcome Back!',
                    token
                });
            });
        } else {
            console.log(4, "user not found");
            res.status(400).json({ msg: "Invalid Username or Password" });
        }
    } catch (err) {
        console.log(5, "error in finding user");
        res.status(400).json({ msg: "Unexpected Error Occured" });
    }

    // Check if username and password match
    // if (username === user.username && password === user.password) {
    //     // Generate JWT token
    //     const token = generateToken(user)

    //     res.json({
    //         success: true,
    //         message: 'Authentication successful!',
    //         token: token,
    //     });
    // } else {
    //     res.status(401).json({
    //         success: false,
    //         message: 'Invalid username or password',
    //     });
    // }
})

router.post("/register", async (req, res) => {
    const data = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    // console.log("inside register route")
    const existinguser = await Admin.findOne({ username: data.username })
    if (existinguser) {
        res.status(401).json({ errorMsg: "This username is already taken!" })
    } else {
        bcrypt
            .hash(req.body.password, 10)
            .then((hashedPassword) => {
                data.password = hashedPassword
                data
                    .save()
                    .then((result) => {
                        res
                            .status(200)
                            .json({ message: "Admin registration successful", result })
                        console.log(result)
                    })
                    .catch((err) => {
                        res.status(400).json({ errorMsg: "Error!! Try after some time" })
                    })
            })
            .catch((err) => {
                res
                    .status(401)
                    .json({ errorMsg: "Password is not hashed successfully" })
            })
    }
})

// Protected Route
router.get('/protected', validateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the protected route!',
        user: req.user,
    });
});