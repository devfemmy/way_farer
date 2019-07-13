const express = require('express');
const router = express.Router();

//admin can create a trip
router.post('/trips', (req, res, next) => {
    const cred = {
        token:req.body.token,
        user_id:req.body.user_id,
        is_admin: req.body.is_admin
    }
    res.status(200).json({
        status: 'success',
        data: {
            trip_id: 1,
            bus_id: 1,
            origin: 'Badagry',
            destination: 'Lagos',
            trip_date: new Date,
            fare: 50.0
        }
    });
});

//admin can cancel a trip

router.patch('/trips/:tripId', (req, res, next) => {
    const cred = {
        token:req.body.token,
        user_id:req.body.user_id,
        is_admin: req.body.is_admin
    }
    res.status(200).json({
        status: 'success',
        data: {
            message: 'Trip cancelled successfully'
        }
    });
});

//admin can see all bookings
router.get('/bookings', (req, res, next) => {
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
                user_id: 3,
                trip_id: 3,
                bus_id: 5,
                trip_date: new Date,
                seat_number: 4,
                first_name: 'Oluwafemi',
                last_name: 'Ake',
                email: 'ayo@gmail.com'
            },
            {
                booking_id: 2,
                user_id: 2,
                trip_id: 2,
                bus_id: 3,
                trip_date: new Date,
                seat_number: 3,
                first_name: 'Oluwafemi',
                last_name: 'Adesua',
                email: 'adeb@gmail.com'
            },

 

        ]
    });
});



module.exports = router;