const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
	console.log(drivers.push(name));
}

function destructivelyPrependDriver(name) {
	console.log(drivers.unshift(name));
}

function destructivelyRemoveLastDriver() {
	console.log(drivers.pop());
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	otherDrivers = [...drivers, name];
	return otherDrivers;
}

function prependDriver(name) {
	otherDrivers = [name, ...drivers];
	return otherDrivers;
}

function removeLastDriver() {
	remainingDrivers = drivers.slice(0, drivers.length -1);
	return remainingDrivers;
}

function removeFirstDriver() {
	console.log(remainingDrivers = drivers.slice(1, drivers.length));
	return remainingDrivers;
}