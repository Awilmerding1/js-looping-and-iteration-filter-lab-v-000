// Code your solution in this file

function findMatching(drivers, name) {
  drivers.filter(function(driver, name) {return driver[name] === name});
}