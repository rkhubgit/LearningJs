// String in Javascript 

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor


// let myName = "Rohit Kumar";
// console.log(myName);

// let myName = new String("Rohit Kumar");
// console.log(myName);

// How to find the length of the string

// let myName = "Rohit Kumar";
// console.log(myName.length);

// Escape Character in String

// let anySnetence = "I am rohit kumar 'and' i belong to bijnor";
// console.log(anySnetence);

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// Finding a string in a string 

// String.indexOf(searchValue [, fromIndex])

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...






// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.


// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));


//  Searching for a String in a String

// The search() method searches a string for a specified 
// value and returns the position of the match
// The search() method cannot take a second start position argument.

// String.search(regexp);

// const myBiodata  = 'i am rohit kumar';
// let sData = myBiodata.search('rohit');
// console.log(sData);


// Extracting String parts
// There are three parts in a extracting character 

// slice(start, end)
// substring(start, end)
// substr(start, length)

// the Slice method
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// let str = "Apple, Banana, Kiwi, Mango";
// let res = str.slice(0, 5);
// console.log(res);

// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.

// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0, 279);
// console.log(myActualTweet);

// The substring method
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.


// // If we give negative value then the characters are
//  counted from the 0th pos 

// let  str = "Apple, banana, kiwi , orange";
// let Astr = str.substring(8, -6);
// console.log(Astr);                Apple, b


// substr method() 
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);

// Replacing Stirng Content()
// Stirng.replace(searhFor, replaceWtith)
// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `i am rohit kumar and i am belong tyt bijnor`;
// let replaceda = myBioData.replace('tyt', 'to');
// console.log(replaceda);
// console.log(myBioData);

// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work

// Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() Method
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));

// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));




// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1])



//  Other useful methods 

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());







// The concat() Method 
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));






// String.trim() 
// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());







// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe

let a = 5;

const promise = new Promise((resolve, reject) => {
    if(a % 2 === 0){
        resolve('Promise are to be resolved')
    }else{
        reject('Promise are to be reject')
    }
})
promise
.then((message) => console.log(message))
.catch((err) => console.log(err))