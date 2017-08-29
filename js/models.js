"use strict";

const Helper = require("./helper"),
      Types = require("./types");

////////////////////////// AERIALS //////////////////////////
function Wasp(){                            // WASP MODEL Constructor
  this.attack += Helper.rndNum(-5, -1);       // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(-6, -2);        // BUFF/NERF to default health range - top of range first, bottom of range second
}
Wasp.prototype = new Aerial("Wasp");        // passes to the TYPES.JS function as argument for model

function Hawk(){                            // HAWK MODEL Constructor
  this.attack += Helper.rndNum(-7, -3);       // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(8, -4);        // BUFF/NERF to default health range - top of range first, bottom of range second
}
Hawk.prototype = new Aerial("Hawk");        // passes to the TYPES.JS function as argument for model


////////////////////////// DROIDS //////////////////////////
function Soldier(){                         // SOLDIER MODEL Constructor
  this.attack += Helper.rndNum(10, 5);      // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(12, 8);       // BUFF/NERF to default health range - top of range first, bottom of range second
}
Soldier.prototype = new Droid("Soldier");   // passes to the TYPES.JS function as argument for model

function Brute(){                           // BRUTE MODEL Constructor
  this.attack += Helper.rndNum(15, 10);     // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(15, 10);      // BUFF/NERF to default health range - top of range first, bottom of range second
}
Brute.prototype = new Droid("Brute");       // passes to the TYPES.JS function as argument for model


////////////////////////// MECHS //////////////////////////
function Titan(){                           // TITAN MODEL Constructor
  this.attack += Helper.rndNum(18, 13);     // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(19, 14);      // BUFF/NERF to default health range - top of range first, bottom of range second
}
Titan.prototype = new Mech("Titan");        // passes to the TYPES.JS function as argument for model

function Quad(){                            // QUAD MODEL Constructor
  this.attack += Helper.rndNum(20, 15);     // BUFF/NERF to default attack range - top of range first, bottom of range second
  this.heath += Helper.rndNum(21, 16);      // BUFF/NERF to default health range - top of range first, bottom of range second
}
Quad.prototype = new Mech("Quad");          // passes to the TYPES.JS function as argument for model


module.exports = {Wasp, Hawk, Soldier, Brute, Titan, Quad};     // export Wasp, Hawk, Soldier, Brute, Titan, and Quad modules
