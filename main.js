// Parse inline parameters using slice function.
const args = process.argv.slice(2);

/**
 * Determines wheather one to one character mapping exists - Main logic of test.
 * @param string str1  String which needs to be mapped in str2.
 * @param string str2  String in which str1 will be mapped.
 * @return boolean
 */
const Mapping = (str1, str2) => {
	// Check if string1 is smaller than string2
	if(str1.length > str2.length) return false;

	// Initialize Map
    let map = new Map();

    // Loop through str1
    for(let i = 0; i < str1.length; i++){
        let charOfStr1 = str1[i], charOfStr2 = str2[i]

        // Check if map contains the letter
        if(map.has(charOfStr1)){
        	// Compare string from hashmap to current mapped string.
            if(map.get(charOfStr1) !== charOfStr2)return false
        }else{
            // Insert in hashmap
            map.set(charOfStr1, charOfStr2)
        }
    }
    return true
};


// Check if there are more or less than 2 input parameters.
if (args.length != 2) {
	console.log("Error : Number of arguments are incorrect");
} else {
	const str1 = args[0];
	const str2 = args[1];
	// Called Mapping function
	const result = Mapping(str1, str2);
	// Print result to console.
	console.log(result);
}