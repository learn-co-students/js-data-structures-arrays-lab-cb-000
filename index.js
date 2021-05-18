const drivers = ["Milo",'Otis','Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() { 
 drivers.shift()
}

function appendDriver (name) {
  let newArr = drivers.concat(name)
  return newArr
}

function prependDriver (name) {
  let newArr = [name,...drivers]
  return newArr
}

function removeFirstDriver () {
  let newArr = drivers.slice(1,drivers.length)
  return newArr
}

function removeLastDriver () {
  let newArr = drivers.slice(0,drivers.length - 1)
  return newArr
}