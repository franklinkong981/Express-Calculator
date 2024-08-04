const express = require('express');

const app = express();

const calculateMean = require('./helpers/mean.js');
const calculateMedian = require('./helpers/median.js');
const calculateMode = require('./helpers/mode.js');

const NoNumsError = require('./errors/noNumsError.js');
const InvalidNumsError = require('./helpers/invalidNumsError.js');

function isQueryAllNumbers(query) {
    let queryParts = query.split(",");
    for (let part in queryParts) {
        if (isNaN(part)) {
            return false;
        }
    }
    return true;
}

app.get('/mean', (req, res) => {
    try {
        if (!req.query.nums) {
            
        }
    }
});