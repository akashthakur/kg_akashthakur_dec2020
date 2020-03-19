// Parse inline parameters using slice function.
const args = process.argv.slice(2);

// Check if there are more or less than 2 input parameters.

if (args.length != 2) {
	console.log("Error : Number if arguments are incorrect");
} else {
	const str1 = args[0];
	const str2 = args[1];
	return Mapping(str1, str2);
}


if( str1.length > str2.length) {
	console.log("Fatta")
} 