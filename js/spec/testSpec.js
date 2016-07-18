'use strict';
const test = require('tape');
const math = require('../math'),
      Robot = require('../robots');

test('foo', function(t){
  // t.equal(actual, expected, "should...")
  t.equal(math.add(1,3), 4, "should add two numbers together");
  // t.ok(actual, "should...");   ((should exist))
  t.ok(math.bar, "should have a bar function");

  t.end();
});


test('Robot Constructor', function(t){
  let testRobot = new Robot();

  // t.equal(actual, expected, "should...")
  t.equal(testRobot.heads, 2, "should have 2 heads");
  // t.ok(actual, "should...");   ((should exist))
  t.ok(testRobot.heads, "should have a head value");

  t.end();
});


