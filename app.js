const express = require('express');

const app = express();

const calculateMean = require('./helpers/mean.js');
const calculateMedian = require('./helpers/median.js');
const calculateMode = require('./helpers/mode.js');

const NoNumsError = require('./errors/noNumsError.js');
const InvalidNumsError = require('./errors/invalidNumsError.js');
const NoPageFoundError = require('./errors/noPageFoundError.js');

function isNumber(value) {
    return !isNaN(value);
}

function isQueryAllNumbers(query) {
    let queryParts = query.split(",");
    for (let part of queryParts) {
        if (!(isNumber(part))) {
            return false;
        }
    }
    return true;
}

function convertStringToNumberArray(query) {
    let numsArray = query.split(",");
    for (let i = 0; i < numsArray.length; i++) {
        numsArray[i] = Number(numsArray[i]);
    }
    return numsArray;
}

app.get('/mean', (req, res, next) => {
    debugger;
    try {
        if (!(req.query.nums)) {
            throw new NoNumsError("No nums property in query string", 400);
        }
        else if (!(isQueryAllNumbers(req.query.nums))) {
            throw new InvalidNumsError("One of more of the values in nums is not a number", 400);
        }
        let mean = calculateMean(convertStringToNumberArray(req.query.nums));
        return res.status(200).json({ response: {operation: "mean", value: mean} });
    }
    catch(e) {
        next(e);
    }
});

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new NoNumsError("No nums property in query string", 400);
        }
        else if (!(isQueryAllNumbers(req.query.nums))) {
            throw new InvalidNumsError("One of more of the values in nums is not a number", 400);
        }
        let median = calculateMedian(convertStringToNumberArray(req.query.nums));
        return res.status(200).json({ response: {operation: "median", value: median} });
    }
    catch(e) {
        next(e);
    }
});

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new NoNumsError("No nums property in query string", 400);
        }
        else if (!(isQueryAllNumbers(req.query.nums))) {
            throw new InvalidNumsError("One of more of the values in nums is not a number", 400);
        }
        let modes = calculateMode(convertStringToNumberArray(req.query.nums));
        return res.status(200).json({ response: {operation: "mode", value: modes} });
    }
    catch(e) {
        next(e);
    }
});

app.get('/all', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new NoNumsError("No nums property in query string", 400);
        }
        else if (!(isQueryAllNumbers(req.query.nums))) {
            throw new InvalidNumsError("One of more of the values in nums is not a number", 400);
        }
        let numsArray = convertStringToNumberArray(req.query.nums);
        let mean = calculateMean(numsArray);
        let median = calculateMedian(numsArray);
        let modes = calculateMode(numsArray);
        return res.status(200).json({ response: {operation: "all", mean: mean, median: median, modes: modes} });
    }
    catch(e) {
        next(e);
    }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new NoPageFoundError("Page Not Found", 404);
    next(e);
});

// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
  
  

