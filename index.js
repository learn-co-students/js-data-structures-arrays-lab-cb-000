// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.push(name);
  return copyOfDrivers;
}

function prependDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.unshift(name);
  return copyOfDrivers;
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
