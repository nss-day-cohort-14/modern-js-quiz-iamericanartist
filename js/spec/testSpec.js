"use strict";
const test = require("tape");
const Robot = require("../robots");


test("Robot Constructor", function(t){
  let testRobot = new Robot();

  // t.equal(actual, expected, "should...")
  t.equal(testRobot.heads, 2, "should have 2 heads");
  // t.ok(actual, "should...");   ((should exist))
  t.ok(testRobot.heads, "should have a head value");

  t.end();
});


