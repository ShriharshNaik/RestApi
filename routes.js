const express = require('express');
const router = express.Router();

const routes = require('./routes');

router.post('/',(req, res, next) => {
    res.status(200).json({
message: 'Im Connected'
    });
});


router.get('/:productId',(req, res, next) => {
        const id = req.params.productId;
        if (id === 'special'){
        res.status(200).json({
    message: 'You discovered a special ID',
    id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
                });
    }
    });

module.exports = router;