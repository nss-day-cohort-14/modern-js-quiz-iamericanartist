"use strict"

const rndNum = (big, little) => {
  let num1 = little || 0,             // assigns (little) to num1 OR "0" if empty/only one argument
      num2 = big || 100;              // assigns (big) to num2 OR "100" if empty (only one argument will set "big")
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;      //standard Random Number Generator with inclusive top value
};

module.exports = {rndNum};