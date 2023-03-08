# OurQueue

OurQueue is a cross-platform, collaborative music queuing app. Create a queue on the host device and have your friends join and add songs to the queue. Customize your queue's settings by setting queue cooldowns or by letting your friends vote for the next song. Use OurQueue to spice up a long roadtrip or to let guests participate in making your party's soundtrack!

![OurQueue mock](/assets/ourqueue-mock.jpeg)

### Key Features:
- Create and join a group queue
- Anyone can add songs to the queue
- Vote for the next song
- Cross-platform - supports Spotify and Apple Music
- View the song history and open them in your streaming service

### Color Palette
- <div style="background-color:#E61239; color:black">Primary #E61239</div>
- <div style="background-color:#FB9DAE; color:black">Secondary #FB9DAE</div>
- <div style="background-color:#FFFFFF; color:black">Light #FFFFFF</div>
- <div style="background-color:#474747; color:white">Dark #474747</div>



&nbsp;  

# Github testing
First edit to README file!  
Second edit, using Github!  
Conflict settled, both parties happy :)  

From completing this assignment, I learned why it's called a "pull request" - you're requesting that the main branch pulls your changes into the remote repository.  
I also gained a needed refresher on commiting, pushing, and pulling. Additionally, I learned that it's not good to add large files that change  
to your git repository, as it will create a copy of that file each time you commit changes, which will use up a lot of space.

Testing remote and local repos are still synced after name change.

# Interesting Linux Commands
`traceroute google.com` - See the network path your computer connected through reach the target website  
`dig google.com` - Get the IP address for a domain  
`whois google.com` - Get information about a domain name  

# HTML
`<!DOCTYPE html>` - required at top of document, as well as `<html>` tag to begin HTML file  
`<input>` - multiple input options, depending on `type` attribute  
`<button>`
`<label>` - Label for inputs, use attribute `for` to specify `id` of the intended object  
`<table>`, with `<tr>` rows, `<td>` table data  
`class` attribute - use to group content, regardless of location within HTML document  
`id` attribute - assign unique ID to element
## Tag Structure
`<html>` - root  
`<head>` - contains metadata, such those affecting title of webpage, favicon, viewport  
`<body>`, contains:
- `<header>` - header
- `<main>` - main content
- `<footer>` - footer

# CSS
- CSS info goes in `<head>` tag, either link or using `<style>` tag  
- Can also put inline, e.g. `<p style="color:green">CSS</p>`  

## Rule Selectors
- element type selectors  
- combinators
    - descendant: `body section` 
    - child (direct children): `section > p`
    - general sibling: `p ~ div`
    - adjacent sibling: `p + div`  
- class selectors - `.summary`, 
    - can combine element name and class selectors: `p.summary`
- ID selectors - `#physics`  
- attribute selectors 
    - any element with given attribute: `a[href]`
    - with attribute and required value: `a[href="./fish.png"]`
    - wildcard selector (*) - when attribute value contains "https://": `p[href*="https://"]`
- pseudo selectors
    - positional relationships
    - mouse interactions
    - hyperlink visitation status
    - attributes

## Declarations
The actual CSS attributes assigned to elements of a webpage to change their appearance. See [here](https://github.com/webprogramming260/.github/blob/main/profile/css/declarations/declarations.md) for most commonly used declarations.  

## Units
Absolute (px, in) and realtive (em, ...). See link above for more details.  

## Color
- keyword
- RGB hex, optional alpha `#00FFAA22`
- RGB function `rbg(50%, 255, 128, 0.5)`
- HSL `hsl(180, 30%, 90%, 0.5)`  

## Responsive CSS
- Media queries: `@media (condition) { conditional formatting }` - e.g. `(orientation: portrait)`
### Flex
`display: flex;`
- children: add `flex:` CSS attribute
    - `flex: 0 80px` - 0 means it won't grow, starting height of 80px
    - `flex: 1` - one fractional unit of growth. If there are 3 children with `flex: 1`, each child will get 1/3 the space. 
### Grid
- `display: grid;` - Grid display
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
- `grid-template-columns` - specifies grid layout
    - "repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the grid width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts for each of the children."
- 300px high, 1em gap between grid items 

# JavaScript
- weakly typed
- executed using interpreter at runtime, not compiled
    - pros: portable; cons: allows errors only discovered during execution
- versions may matter
- string concat: `"Hello" + " World"`
- `console.log("string");`
- `function join(a, b) {...}`
- `// Line comment`
- `/* Block comment */`

## JS Console
- `console.log("Hello %s", "world");`
- `console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');` `// OUTPUT: JavaScript Demo //in large green text`
- Timers
```js
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```
- Count - count how many times block of code is called
```js
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```
## JavaScript in HTML
- in `<script>` or in `<head>` reference `<script src="javascript.js"></script>`
- e.g. `<button onclick="sayHello()">Say Hello</button>`
## JavaScript Type and Construct
- Declaring variables 
    - `let` mutable
    - `const` immutable
    - note: `var` deprecated, don't use
```js
let x = 1;
const y = 2;
```
### Primitive Types

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

### Object types


| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

### Common operators: `+ - * /` and equality: `===`
- Strings support concat `+` and equality `===`

### Type conversion
- weakly typed -> type can change when assigned new value, or types can be auto-converted (see example below)
```js
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```
```
// Equality operator == issues - "falsy" and "truthy"
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```
### Strict equality and inequality operators `===` `!==` skip type conversion
- (use this, not `==`)
```js
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```

### Conditionals
    - Ternary operator `?` and `:` -> `if else`
```js
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
```js
a === 1 ? console.log(1) : console.log('not 1');
```

### Boolean operators `&& || !`
## Loops

### for

Note the introduction of the common post increment operation (`i++`) for adding one to a number.

```js
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```

### do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```

### while

```js
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

### for in

The `for in` statement iterates over an object's property names.

```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

For arrays the object's name is the array index.

```js
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```

### for of

The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.

```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

### Break and continue

All of the looping constructs demonstrated above allow for either a `break` or `continue` statement to abort or advance the loop.

```js
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```
## JS String
- backtick `\`` around string denotes that it may contain JS code to be evaluated in place and concatenated into the string
- You can also use backticks to create multiline strings without having to explicitly escape the newline characters using `\n`
```js
'quoted text'; // " also works
const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
- Unicode support: string is 16-bit unsigned int that represents UTF-16 strings
### String functions

| Function    | Meaning                                                      |
| ----------- | ------------------------------------------------------------ |
| length      | The number of characters in the string                       |
| indexOf     | The starting index of a given substring                      |
| split       | Split the string into an array on the given delimiter string |
| startsWith  | True if the string has a given prefix                        |
| endsWith    | True if the string has a given suffix                        |
| toLowerCase | Converts all characters to lowercase                         |

```js
const s = 'Example:조선글';
console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

## Functions
- functions are objects. can be:
    - assigned name
    - passed as parameter
    - returned as result
    - referenced from object or array like any other variable
- return single value
### Parameters
- undefined if not provided in call
- can define default value
```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

### Anonymous functions
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.
```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2


// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```
### Inner Functions
Functions can be declared inside other functions

# AWS Server info
Domain/URL: [http://dug-cs.link](http://dug-cs.link)  
Elastic IP: `http://3.140.147.76`  
ssh command:   
`ssh -i 260-204-key-pair.pem ubuntu@3.140.147.76`
