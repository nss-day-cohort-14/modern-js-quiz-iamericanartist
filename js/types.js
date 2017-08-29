"use strict";

const Helper = require("./helper"),
      Robot = require("./robot");

////////////////////////// AERIAL //////////////////////////
function Aerial(model){                     // AERIAL TYPE Constructor
  this.model = model;                       // argument provided from MODELS.JS (WHICH IS 3RD ON PROTOTYPE CHAIN)
}
Aerial.prototype = new Robot("Aerial");     // passes to the ROBOT.JS function as argument for type


////////////////////////// DROID //////////////////////////
function Droid(model){                      // DROID TYPE Constructor
  this.model = model;                       // argument provided from MODELS.JS (WHICH IS 3RD ON PROTOTYPE CHAIN)
}
Droid.prototype = new Robot("Droid");       // passes to the ROBOT.JS function as argument for type


////////////////////////// MECH //////////////////////////
function Mech(model){                       // MECH TYPE Constructor
  this.model = model;                       // argument provided from MODELS.JS (WHICH IS 3RD ON PROTOTYPE CHAIN)
}
Mech.prototype = new Robot("Mech");         // passes to the ROBOT.JS function as argument for type


module.exports = {Aerial, Droid, Mech};     // export Aerial, Droid, and Mech modules
