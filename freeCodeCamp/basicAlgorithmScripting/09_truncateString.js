/*
Truncate a string (first argument) if it is longer than the given maximum string length 
(second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in determining 
the truncated string.

Here are some helpful links:
String.prototype.slice()
*/
///////////////////// solution 01  /////////////////////
function truncateString(str, num) {
 if ((num > 3) && (str.length > num)){
    str = str.slice(0, num - 3) + "...";    
  } 

 if (num <= 3) {
    str = str.slice(0, num) + "...";
  }
  
return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
/*
truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".
*/


