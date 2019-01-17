/*
 * GET Requests 
 */

import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {

    res.render('index', {
        title: 'SSOA NodeJS Project Raspberry/DHT11'
    });

});

router.get('/measurements', (req: express.Request, res: express.Response) => {

    var temp = 10;
    var hum = 40;

    // ********** Simulate MeasurementValues for Debug Mode without Hardware **************
    temp = Math.floor((Math.random() * 15) + 10);
    hum = Math.floor((Math.random() * 25) + 10);
    res.json({ measurements: '' + temp + ':' + hum });
    // ************************************************************************************

    // *************** Comment Out for running on Device **********************************
    
    //const sensor = require("node-dht-sensor");
    //sensor.read(11, 4, function (err, temperature, humidity) {
    //    if (!err) {
    //        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
    //            'humidity: ' + humidity.toFixed(1) + '%');
    //      temp = temperature.toFixed(1);
    //      hum = humidity.toFixed(1);
    //      res.json({ measurements: '' + temp + ':' + hum });
   
    //    }
    //});
    
    //*************************************************************************************
   
});

export default router;