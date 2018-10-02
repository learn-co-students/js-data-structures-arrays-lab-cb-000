const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  let copy = drivers.slice();
  copy.push(name);
  return copy;
}

function prependDriver(name) {
  let copy = drivers.slice();
  copy.unshift(name);
  return copy;
}

function removeLastDriver(name) {
  let copy = drivers.slice();
  copy.pop(name);
  return copy;
}

function removeFirstDriver(name) {
  let copy = drivers.slice();
  copy.shift(name);
  return copy;
}
