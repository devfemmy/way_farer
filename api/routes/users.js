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

//user can see all his bookings

router.get('/bookings/:user_id', (req, res, next) => {
    const cred = {
        token:req.body.token,
        user_id:req.body.user_id,
        is_admin: req.body.is_admin
    }
    res.status(200).json({
        status: 'success',
        data:[
            {
                booking_id: 1,
                user_id: 1,
                trip_id: 1,
                bus_id: 2,
                trip_date: new Date,
                seat_number: 2,
                first_name: 'Oluwafemi',
                last_name: 'Akerele',
                email: 'adebayo@gmail.com'
            },
            {
                booking_id: 3,
                user_id: 1,
                trip_id: 3,
                bus_id: 5,
                trip_date: new Date,
                seat_number: 4,
                first_name: 'Oluwafemi',
                last_name: 'Akerele',
                email: 'adebayo@gmail.com'
            },
            {
                booking_id: 2,
                user_id: 1,
                trip_id: 2,
                bus_id: 3,
                trip_date: new Date,
                seat_number: 3,
                first_name: 'Oluwafemi',
                last_name: 'Akerele',
                email: 'adebayo@gmail.com'
            },

 

        ]
    });
});


//user delete


module.exports = router;