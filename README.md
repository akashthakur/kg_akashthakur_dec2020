# kg_akashthakur_dec2020
Summer Internship assessment for Kargo

# How to run
- Make sure you have latest version of Nodejs and git.
- Clone the directory
- When in directory, run `node main.js abc bdc`

# Restrictions
- Make sure you just pass two parameters, if you pass more than 2 or less than 2 parameters to the script, It will throw error.
- For eg `node main.js bar foo kargo` will give `Error : Number of arguments are incorrect`

# Assumptions
- Input parameter is valid string and without any special character
- Code might behave different if you insert special character input
- for eg
	- Code will return wrong input if you start or insert `$` in your string.
		- `node main.js bar y$abcabc` will give wrong answer.
		- `node main.js bar $abcabc` will throw error.
	- Code will break if you end string with '\'.