console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var mySelf = {
  firstName: "Mohamad",
  lastName: "Obeidat",
  age: 22,
  dateOfBirth: "7/12/1996",
  favFood: ["Shawerma", "Burger", "Mkmora"],
  favMovies: ["The Imitation Game", "The Invisible Guest", "The Body", "Intersteller", "Marvel MOVIES"]
};
console.log("First Name: " + mySelf.firstName)
console.log("Last Name: " + mySelf.lastName)
console.log("Age: " + mySelf.age)
console.log(mySelf.dateOfBirth)
console.log(mySelf.favFood)
console.log(mySelf.favMovies)



var persons = [{
    name: {
      first: 'John',
      last: 'Hob'
    },
    age: 35
  },
  {
    name: {
      first: 'Alex',
      last: 'Mercer'
    },
    age: 25
  },
  {
    name: {
      first: 'Alice',
      last: 'Zaheer'
    },
    age: 24
  },
  {
    name: {
      first: 'Zues',
      last: 'Odin'
    },
    age: 55
  },
  {
    name: {
      first: 'Soso',
      last: 'Al-Amora'
    },
    age: 67
  }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(array) {
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].name.first);
  }
  return arr;
}
console.log(firstName(persons));
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge(array) {
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  return sum / array.length;
}
console.log(averageAge(persons));

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(array) {
  var old = array[0].age;
  var fullName = array[0].name.first + " " + array[0].name.last;
  for (let i = 1; i < array.length; i++) {
    if (array[i].age > old) {
      fullName = array[i].name.first + " " + array[i].name.last;
    }
  }
  return fullName;
}
console.log(olderPerson(persons));

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(array) {

  var longTxt = array[0].name.first.length + array[0].name.last.length;
  var name = array[0].name;

  for (let i = 1; i < array.length; i++) {
    if (array[i].name.first.length + array[i].name.last.length > longTxt) {
      name = array[i].name.first + " " + array[i].name.last;
    }
  }
  return name;
}
console.log(longestName(persons));
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  var counter = 0;
  var result = {};
  for (let i = 0; i < str.length; i++) {
    counter = 0;
    for (let k = 0; k < str.length; k++) {
      if (str[i] === str[k]) {
        counter++;
      }
    }
    result[str[i]] = counter;
  }
  return result;
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(string) {
  string = string.toLowerCase();
  string = string.split("");
  var counter = 0;
  var result = {};
  for (let i = 0; i < string.length; i++) {
    counter = 0;
    for (let k = 0; k < string.length; k++) {
      if (string[i] === string[k]) {
        counter++;
      }
    }
    result[string[i]] = counter;
  }
  return result;
}
console.log(repeatChar("mamababatetacedo"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(obj, arr) {
  var result = {};
  for (const key in obj) {
    for (let i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
console.log(selectFromObject({
  a: 1,
  cat: 3
}, ['a', 'cat', 'd']))

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj) {
  var array = [];

  for (const key in obj) {
    array.push(key)
    array.push(obj[key])
  }
  return array;
}
console.log(objectToArray({
  firstName: "Moh",
  age: 24
}))

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1]
  }
  return obj;
}
console.log(arrayToObject(["firstName", "Moh", "age", 24]))
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj) {
  var newObj = {};
  for (const key in obj)
    if (typeof (obj[key]) === 'number')
      newObj[key] = obj[key];

  return newObj;
}
console.log(onlyNumber({
  firstName: "Moh",
  age: 24,
  movies: [1, 5, "string"]
}))
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj) {
  var newObj = {};
  for (const key in obj)
    if (typeof (obj[key]) === 'string')
      newObj[key] = obj[key];

  return newObj;
}
console.log(onlyString({
  firstName: "Moh",
  age: 24,
  movies: [1, 5, "string"]
}))

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  var newObj = {};
  for (const key in obj)
    if (typeof (obj[key]) === 'object')
      newObj[key] = obj[key];

  return newObj;
}
console.log(onlyArray({
  firstName: "Moh",
  age: 24,
  movies: [1, 5, "string"]
}))

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(obj) {
  var array = [];
  for (const key in obj) {
    array.push(key);
  }
  return array;
}
console.log(keysArray({
  firstName: "Moh",
  age: 24,
  movies: [1, 5, "string"]
}))

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj) {
  var array = [];
  for (const key in obj) {
    array.push(obj[key]);
  }
  return array;
}
console.log(valuesArray({
  firstName: "Moh",
  age: 24,
  movies: [1, 5, "string"]
}))

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
function removeKeys() {
  var obj = {
    a: 1,
    b: 3,
    c: 4
  };
  delete obj.b;
  obj.a = 4;
  obj.c = 66;
  return obj
}
console.log(removeKeys())


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj) {
  var counter = 0;
  for (const key in obj) {
    counter++;
  }
  return counter;
  // return Object.keys(obj).length
}
console.log(objectLength({
  a: 1,
  b: 2,
  c: 3,
  d: 4
}))

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj) {
  var newObj = {};
  for (const key in obj) {
    if (obj[key] % 2 === 0) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(evenValue({a:1, b:2, c:3, d:4}))
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/

function longestKey(obj) {
  var longest = 1;
  var value;
  for (const key in obj) {
    if (key.length > longest) {
      longest = key.length;
      value = obj[key];      
    }
  }
  return value;
}
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}))
