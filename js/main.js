"use strict";

const $ = require("jquery");
const hf = require("./helper");             // to use = hf.rndNum
const RobotsModule = require("./robots");   // to use = robots.robot

var Bobbie = new RobotsModule();        //Hmmmmmmm....?
console.log("random",hf.rndNum(-10,20));
console.log("Bobbie is a ",Bobbie);
