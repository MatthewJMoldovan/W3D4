const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    pal = true;
    for(var left = 0; left<str.length/2; left++){
        var right = str.length-1-left;
        if(str[left] != str[right]){
            pal = false;
        }
    }
    console.log(pal);
}

isPalindrome(str1);
isPalindrome(str2);
isPalindrome(str3);
isPalindrome(str4);