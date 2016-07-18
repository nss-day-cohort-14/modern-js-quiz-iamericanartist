"use strict";

const Helper = require('./helper');

function Type(){
  this.heads = 2;
  this.attack = Helper.rndNum(10, 5);  // default attack range - top of range first, bottom of range second
  this.heath = Helper.rndNum(100, 50);  // default health range - top of range first, bottom of range second
 }

module.exports = Type;