// Code your solution in this file

function findMatching(drivers, name) {
  const d = drivers.filter(function(driver) {return driver === name.toUpperCase});
  return d;
}