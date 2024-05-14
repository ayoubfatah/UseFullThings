//1- Capitalize the first letter of a string
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;



//2- Calculate the number of days between two dates
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));


//3 - Cleaning up arrays : 
const cleanedArray = arr.filter(Boolean);
// removes all falsy values (0, false, null, undefined, '', NaN) from an array.


//4-  Finding the Intersection of Two Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6, 8];

const intersection = arr1.filter(value => arr2.includes(value));
// find common elements in arr1 and arr2

// 5 - sum of array values :
const sum = arr.reduce((total, value) => total + value, 0);


//6-  Online Status Checker (checks if the users is online )
const isOnline = navigator.onLine ? 'Online' : 'Offline';


// 7 - Confirm Before Page Leave
window.onbeforeunload = () => 'Are you sure you want to leave?';

//8 -  Convert Seconds to Time String
const toTimeString = seconds => new Date(seconds * 1000).toISOString().substr(11, 8);
//ex of the output  01:01:01'

//9 -  Maximum Value in Object
const maxObjectValue = obj => Math.max(...Object.values(obj));

//10 - Check if Object Contains Value

const hasValue = (obj, value) => Object.values(obj).includes(value);

//11 - Generating a Range of Numbers

const range = Array.from({ length: 5 }, (_, i) => i + 1);

// Output: range = [1, 2, 3, 4, 5]

//12 - Extracting File Extension
const fileName = 'example.png';
const getFileExtension = str => str.slice(((str.lastIndexOf(".") - 1) >>> 0) + 2);
// Output: getFileExtension = 'png'

// 13 -  Checking if the Current Tab is Focused
const isTabFocused = () => document.hasFocus();


// 14 - check if the object is empty
const obj = {}
const isEmpty = Object.keys(obj).length === 0

// 15 - Count Occurrences of a Value in an Array
const array =[1,2,3,5,6]
const count = array.reduce((acc, val) => (val === "value u want to count " ? acc + 1 : acc), 0)

// 16 - Generate a Random Number between Two Values:
const getRandomNumberInRange = (min, max) =>  Math.random() * (max - min) + min;

// 17 - 