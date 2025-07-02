const accountId = 12345
let accountEmail = "rajat20820@gmail.com"
var accountPass = "abc123"
accountCity = "Delhi"

var a;

/*
-- const are constants they cannot be modified it will give error if we try to modify them.
-- let and var both are used for variables but let is used predominantly now because 
   in var there is a issue of block scope and functional scope.
--defining variable without writing const, var, let is not a good programming practice.
--console.log is used to print what is inside a double commas.
--console.table is also present which is used to print 
   multiple variables in single run in a table format.
--constant variable should be initiated when it is defined, 
   but var or let can be used to just define and not initiate.
--if we doesn't initiate a variable and try to print it , it will give undefined.
 */

accountCity = "Mumbai"

console.table([accountId, accountEmail , accountPass, accountCity, a])
