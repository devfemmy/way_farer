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



module.exports = router;