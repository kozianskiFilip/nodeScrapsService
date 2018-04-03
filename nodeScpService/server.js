'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var scraps = require('./scraps');

//var workbook = xlsx.readFile('PLAN_ROZPISKA.XLSM');
//var worksheet = workbook.Sheets["ZESTAWIENIE_DOBA"];
//var desired_cell = worksheet["L5"];
//var desired_value = (desired_cell ? desired_cell.v : undefined);


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(scraps.data);
}).listen(port);
