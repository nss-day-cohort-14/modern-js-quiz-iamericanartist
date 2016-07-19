"use strict";

const Helper = require("./helper");         // not needed here yet...

////////////////////////// ROBOT //////////////////////////
function Robot(type){                       // ROBOT INITIAL Constructor
  this.type = type;                         // argument provided from TYPES.JS (WHICH IS 2ND ON PROTOTYPE CHAIN)
  this.model = null;                        // entered as argument on MODELS.JS into TYPES.JS (WHICH IS 3RD ON PROTOTYPE CHAIN)
  this.name = null;                         // entered as argument on MODELS.JS into TYPES.JS
  this.currentHealth = null;                // will hold the running total of health
  this.heath = Helper.rndNum(100, 50);      // entered as argument on MODELS.JS into TYPES.JS / default health range - top of range first, bottom of range second
  this.attack = Helper.rndNum(10, 5);       // entered as argument on MODELS.JS into TYPES.JS / default attack range - top of range first, bottom of range second

  this.heads = 2;                           // This is just to get testing going! :)
}

module.exports = Robot;                     // export Robot module
