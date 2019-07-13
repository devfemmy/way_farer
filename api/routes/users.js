const express = require('express');
const router = express.Router();

router.get('/get', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get requests'
    });
});

//user sign up 

router.post('/auth/signup', (req, res, next) => {
    const cred = {
        email:req.body.email,
        password:req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    res.status(200).json({
        status: 'success',
        data: {
            user_id: 2,
            is_admin: false,
            token: 'e34rffdjkfdljfkdjkkf'
        }
    });
});

//user sign in

router.post('/auth/signin', (req, res, next) => {
    const cred = {
        email:req.body.email,
        password:req.body.password
    }
    res.status(200).json({
        status: 'success',
        data: {
            user_id: 1,
            is_admin: false,
            token: 'e345gdghsgshdghsdghhgh'
        }
    });
});


//user delete


module.exports = router;