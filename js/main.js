'use strict';

const math = require('./math');
// console.log("math", math);
// console.log("add", math.add);
// console.log("sum", math.add(5, 10));
// console.log("$", $('<button/>'));


const $ = require('jquery');
const hf = require('./helper');  // to use = hf.rndNum
const RobotsModule = require('./robots');  // to use = robots.robot



var Bobbie = new RobotsModule();
console.log("random",hf.rndNum(50));
console.log("robots",Bobbie);
