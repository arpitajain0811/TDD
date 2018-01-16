function upperCaser(input){
	let name =input.toUpperCase();
	return name;
}
module.exports = upperCaser;


console.log('convert to upper case', upperCaser('hello world')==='HELLO WORLD');
