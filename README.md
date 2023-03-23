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

### TODO
- voting changes Votes badge
- order queue based on votes (ask professor/TAs). This potentially affects:
  -  `addSongToQueue` - change to `displayAllSongs`?
  - 
- fix header background color not moving with the nav element
- pressing enter button on keyboard submits song
- add "who voted for this" instead of number badge
- improve UI
- get song data from database using APIs
# AWS Server info
Domain/URL: [http://dug-cs.link](http://dug-cs.link)  
Elastic IP: `http://3.140.147.76`  
ssh command:   
`ssh -i 260-204-key-pair.pem ubuntu@3.140.147.76`  
Deploy script: `./deployWebsite.sh  -k ~/keys/production.pem -h subdomain`
- Made executable by `chmod +x deploy.sh`
# Github testing
First edit to README file!  
Second edit, using Github!  
Conflict settled, both parties happy :)  

From completing this assignment, I learned why it's called a "pull request" - you're requesting that the main branch pulls your changes into the remote repository.  
I also gained a needed refresher on commiting, pushing, and pulling. Additionally, I learned that it's not good to add large files that change  
to your git repository, as it will create a copy of that file each time you commit changes, which will use up a lot of space.

Testing remote and local repos are still synced after name change.

# The Internet, DNS
The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

# Interesting Linux Commands
`traceroute google.com` - See the network path your computer connected through reach the target website  
`dig google.com` - Get the IP address for a domain  
`whois google.com` - Get information about a domain name 

- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command
# Caddy
`sudo service caddy start`  
Caddyfile example
```
myfunkychickens.click {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
   }


startup.myfunkychickens.click {
   reverse_proxy * localhost:4000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}

simon.myfunkychickens.click {
   reverse_proxy * localhost:3000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}
```
# HTML
- `<!DOCTYPE html>` - required at top of document, as well as `<html>` tag to begin HTML file  
- `<input>` - multiple input options, depending on `type` attribute  
- `<button>`
- `<label>` - Label for inputs, use attribute `for` to specify `id` of the intended object  
- `<table>`, with `<tr>` rows, `<td>` table data  
- `class` attribute - use to group content, regardless of location within HTML document  
- `id` attribute - assign unique ID to element
- `<a>` - "anchor", or link, with `href` attribute

Common elements:
| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block **division** of content                                        |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

### Special characters
| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |
## Tag Structure
- exists: body, header, footer, main, section aside, p, table, ol/ul, div, and span
`<html>` - root  
`<head>` - contains metadata, such those affecting title of webpage, favicon, viewport  
`<body>`, contains:
- `<header>` - header
- `<main>` - main content
- `<footer>` - footer

## User Data Input
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

### Input Element
| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

- `pattern` to specify regex pattern required
## Internal Media
- SVG
- `canvas`

# Simon HTML notes
- `<div>` and `<span>` difference: `div` for block organization, `span` is inline
- `ul` vs `ol`- unordered vs. ordered - though can be edited with style, `ul` is generally bulleted, `ol` is numbered
- `button` can either 
- `<form>`
  - `method` attribute, `get` 
  - `action` attribute is URL of where to go
  - submit button within triggers 

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
    - mouse interactions (e.g. hover)
    - hyperlink visitation status
    - attributes

## Declarations
The actual CSS attributes assigned to elements of a webpage to change their appearance. 

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing (around selected content, not around border or margin)|
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

Padding note: outer to inner of CSS box model: margin -> border -> padding -> content

## Units
Absolute (px, in) and realtive (em, ...).
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |




## Color
- keyword
- RGB hex, optional alpha `#00FFAA22`
- RGB function `rbg(50%, 255, 128, 0.5)`
- HSL `hsl(180, 30%, 90%, 0.5)`  

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rbg(50%, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

## Fonts
```css
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
## Responsive CSS
- Media queries: `@media (condition) { conditional formatting }` - e.g. `(orientation: portrait)`
- `display` property

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

Don't scale: `<meta name="viewport" content="width=device-width,initial-scale=1" />`

### Float
Image float to right of text:
```css
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

## Animation using keyframes
```css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

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

# Simon CSS Notes

# Startup HTML/CSS Notes
- `class` is how you access bootstrap CSS styles
- Not sure yet how to change colors of all bootstrap things
  - for example, how to change primary color?
  - `!important` is your friend in overriding bootstrap properties, but this isn't a fix-all
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

Also note: the scoping effect of the initialization block (e.g. `(let i = 0 ...)`) can be understood as if the declaration happens within the loop body, but just happens to be accessible within the condition and afterthought parts. 
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

## JS Arrow Function
Anonymous functions can clutter things up, shorthand: `=>`  
- cannot be used for constructors or iterator generators
TFAE:
```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
### Return values
- `return` keyword optional if no curly braces `{}`
- if curly braces provided, the arrow function behaves like normal function and needs return
```js
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```
### `this` pointer
Arrow functions inherit the `this` pointer from scope of where it was created
- makes what is known as a `closure`
- Closure allows function to continue referencing its creation scope, even after it has passed out of that scope  
Example: The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.
```js
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.
```js
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.
```js
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

## JS Array
Functions: 

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop`                   |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function sort an array in place                     | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

## JS Objects and Classes
- Object: collection of name value pairs referred to as properties
    - name must be string or symbol, value any type
    - Example: `const car = {type:"Fiat", model:"500", color:"white"};`
- constructors, `this` pointer, static properties and functions, inheritance
- create with `new` operator, calls constructor
```js
const obj = new Object();

obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
### object-liteals
```js
const obj = {
  a: 3,
  b: 'fish',
};
```
### Object functions
| Function | Meaning |
| --- | --- |
| entries | Returns an array of key value pairs |
| keys | Returns an array of keys |
| values | Returns an array of values |
### Constructor
Any function returning object is considered a constructor and can be evoked with `new` operator
```js
function Person(name) {
  return {
    name: name,
  };
}
```
### `this` pointer (more on this later)
### Classes
- explicit constructor
- assumed function declaration
    - make private functions and variables by prefixing with `#` (references to them must also include `#`)
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
### Inheritance
Classes can be extended by using the `extends` keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the `super` function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the `super` keyword.

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

## JSON
- Encoded with UTF-8
Supported data types:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

Example:
```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.
Note that in this example, JSON cannot represent the JavaScript `undefined` object and so it gets dropped when converting from JavaScript to JSON.
```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
## Regular expressions (Regex)
```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
- some string functions accept regex, including match, replace, search, split, test
 
**Flags after regex, e.g. `/.../gi`**
<table>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Description</th>
      <th>Corresponding property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>d</code></td>
      <td>Generate indices for substring matches.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices"><code>hasIndices</code></a></td>
    </tr>
    <tr>
      <td><code>g</code></td>
      <td>Global search.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global"><code>global</code></a></td>
    </tr>
    <tr>
      <td><code>i</code></td>
      <td>Case-insensitive search.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase"><code>ignoreCase</code></a></td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td>Allows <code>^</code> and <code>$</code> to match newline characters.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a></td>
    </tr>
    <tr>
      <td><code>s</code></td>
      <td>Allows <code>.</code> to match newline characters.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a></td>
    </tr>
    <tr>
      <td><code>u</code></td>
      <td>"Unicode"; treat a pattern as a sequence of Unicode code points.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode"><code>unicode</code></a></td>
    </tr>
    <tr>
      <td><code>y</code></td>
      <td>Perform a "sticky" search that matches starting at the current position in the target string.</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky"><code>sticky</code></a></td>
    </tr>
  </tbody>
</table>

## Rest and Spread
### Rest
`...name` on last parameter to group the rest of the parameters
```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
### Spread
Opposite of rest. `...iterable` (array, string, ...), expands the iterable's contents into the parameters
```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
## Destructuring Arrays and Objects
Arrays (note: you can skip elements by just leaving spaces, e.g. `[a, , b, c]` will skip the second element)
```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Objects:
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
## Exceptions
`try` & `catch`, `throw`, `finally`
- only throw exceptions when something truly exceptional occurs
```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```
### Fallback pattern
Fallback option in the catch clause if the try didn't provide the necessary item
## Scope
1. Global - visible to all code
2. Module - visible to all code running in a module
3. Function - visible within a function
4. Block - visible within a block of code (delimited by curly braces `{}`)
### `var`
- `var` used to be used, but it ignores block scope - it's always in scope above the block
### `this`
1. Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
2. Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
3. Object - When this is referenced in a object it refers to the object.
```js
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```
### Closure
- function and its surrounding state
  - e.g. function declared has access to variables of place it's declared
- arrow functions inherit `this` pointer of their creation context
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
However, if we make function in our object that returns an arrow function, then the this pointer will be the object's this pointer since that was the active context at the time the arrow function was created.
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```
## Modules
- node.js modules: CommonJS
- JavaScript modules: ES modules
- export and import
```js
export function alertDisplay(msg) {
  alert(msg);
}
```
```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```
- Node.js runtime treats all JavaScript as modules
  - Using ES modules in browser, only modules can call other modules - can't import a module object into globally scoped JavaScript file.
From your HTML, you can differentiate that you are using a ES module by including the type of module in the script element. You can then import and use other modules and even make a module's object visible in the global scope
```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;
    </script>
    <button onclick="btnClick('called from index.html')">Press me</button>
  </body>
</html>
```
## DOM (Document Object Model)
Object representation of HTML elements browser uses to render display
- also exposes DOM to external code to write programs that can manipulate the HTML
- global variable name `document` points to DOM root element
### Access the DOM
Elements in HTML implement DOM Element interface
- provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes
```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
Can provide CSS selector to `querySelectorAll` function to select elements. `textContent` contains element's text. Can also get textual representation of element's HTML with `innerHTML` property
```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```
### Modify DOM
```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
```js
function deleteChild(parentSelector) {
  const el = document.querySelector(parentSelector);
  el.parentElement.removeChild(el);
}

deleteChild('#courses div');
```
### Injecting HTML
Below: finds first `div` element and replaces all its HTML
```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```
This is a common attack vector for hackers, so must be sure it cannot be manipulated by user. Common injection paths:
- HTML input controls
- URL parameters
- HTTP headers
Either sanitize HTML that contains variables or use DOM manupulation functions instead of using `innerHTML`
### Event listeners
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
Event Types on MDN (expand to see):
<details>
  <summary>Event Types (click me)</summary>
  
  <div class="section-content"><figure class="table-container"><table class="standard-table">
    <tbody>
      <tr>
        <th>Event type</th>
        <th style="width: 50%">Description</th>
        <th>Documentation</th>
      </tr>
      <tr>
        <td>Animation</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Web_Animations_API">Web Animation API</a>.
          </p>
          <p>
            Used to respond to changes in animation status (e.g. when an animation
            starts or ends).
          </p>
        </td>
        <td>
          Animation events fired on
          <a href="/en-US/docs/Web/API/Document#animation_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/Window#animation_events"><code>Window</code></a>,
          <a href="/en-US/docs/Web/API/HTMLElement#animation_events"><code>HTMLElement</code></a>.
        </td>
      </tr>
      <tr>
        <td>Asynchronous data fetching</td>
        <td>
          <p>Events related to the fetching data.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/AbortSignal#events"><code>AbortSignal</code></a>,
          <a href="/en-US/docs/Web/API/XMLHttpRequest#events"><code>XMLHttpRequest</code></a>,
          <a href="/en-US/docs/Web/API/FileReader#events"><code>FileReader</code></a>.
        </td>
      </tr>
      <tr>
        <td>Clipboard</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Clipboard_API">Clipboard API</a>.
          </p>
          <p>Used to notify when content is cut, copied, or pasted.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#clipboard_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/Element#clipboard_events"><code>Element</code></a>,
          <a href="/en-US/docs/Web/API/Window#clipboard_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Composition</td>
        <td>
          <p>
            Events related to composition; entering text "indirectly" (rather than
            using normal keyboard presses).
          </p>
          <p>
            For example, text entered via a speech to text engine, or using
            special key combinations that modify keyboard presses to represent new
            characters in another language.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Element#composition_events"><code>Element</code></a>.
        </td>
      </tr>
      <tr>
        <td>CSS transition</td>
        <td>
          <p>
            Events related to
            <a href="/en-US/docs/Web/CSS/CSS_Transitions">CSS Transitions</a>.
          </p>
          <p>
            Provides notification events when CSS transitions start, stop, are
            cancelled, etc.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#transition_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/HTMLElement#transition_events"><code>HTMLElement</code></a>,
          <a href="/en-US/docs/Web/API/Window#transition_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Database</td>
        <td>
          <p>
            Events related to database operations: opening, closing, transactions,
            errors, etc.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/IDBDatabase#events"><code>IDBDatabase</code></a>,
          <a href="/en-US/docs/Web/API/IDBOpenDBRequest#events"><code>IDBOpenDBRequest</code></a>,
          <a href="/en-US/docs/Web/API/IDBRequest#events"><code>IDBRequest</code></a>,
          <a href="/en-US/docs/Web/API/IDBTransaction#events"><code>IDBTransaction</code></a>.
        </td>
      </tr>
      <tr>
        <td>DOM mutation</td>
        <td>
          <p>
            Events related to modifications to the Document Object Model (DOM)
            hierarchy and nodes.
          </p>
        </td>
        <td>
          <div class="notecard warning" id="sect2">
            <p>
              <strong>Warning:</strong>
              <a href="/en-US/docs/Web/API/MutationEvent">Mutation Events</a> are
              deprecated.
              <a href="/en-US/docs/Web/API/MutationObserver">Mutation Observers</a>
              should be used instead.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>Drag'n'drop, Wheel</td>
        <td>
          <p>
            Events related to using the
            <a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API">HTML Drag and Drop API</a>
            and <a href="/en-US/docs/Web/API/WheelEvent">wheel events</a>.
          </p>
          <p>
            Drag and Wheel events are derived from mouse events. While they are
            fired when using mouse wheel or drag/drop, they may also be used with
            other appropriate hardware.
          </p>
        </td>
        <td>
          <p>
            Drag events fired on
            <a href="/en-US/docs/Web/API/Document#drag_drop_events"><code>Document</code></a>
          </p>
          <p>
            Wheel events fired on
            <a href="/en-US/docs/Web/API/Element/wheel_event"><code>Document</code></a>
            and
            <a href="/en-US/docs/Web/API/Element/wheel_event"><code>Element</code></a>
          </p>
        </td>
      </tr>
      <tr>
        <td>Focus</td>
        <td>
          <p>Events related to elements gaining and losing focus.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Element#focus_events"><code>Element</code></a>,
          <a href="/en-US/docs/Web/API/Window#focus_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Form</td>
        <td>
          <p>Events related to forms being constructed, reset and submitted.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/HTMLFormElement#events"><code>HTMLFormElement</code></a>.
        </td>
      </tr>
      <tr>
        <td>Fullscreen</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
          </p>
          <p>
            Used to notify when the transitioning between full screen and windowed
            modes, and also of errors occurring during this transition.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#fullscreen_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/Element#fullscreen_events"><code>Element</code></a>.
        </td>
      </tr>
      <tr>
        <td>Gamepad</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Gamepad_API">Gamepad API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#gamepad_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Gestures</td>
        <td>
          <p>
            <a href="/en-US/docs/Web/API/Touch_events">Touch events</a> are
            recommended for implementing gestures.
          </p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/Document#touch_events"><code>Document</code></a>,
            <a href="/en-US/docs/Web/API/Element#touch_events"><code>Element</code></a>.
          </p>
          <p>In addition there are a number of non-standard gesture events:</p>
          <ul>
            <li>
              Non-standard WebKit specific events on
              <a href="/en-US/docs/Web/API/Element#touch_events"><code>Element</code></a>:
              <a href="/en-US/docs/Web/API/Element/gesturestart_event"><code>gesturestart</code> event</a>,
              <a href="/en-US/docs/Web/API/Element/gesturechange_event"><code>gesturechange</code> event</a>,
              <a href="/en-US/docs/Web/API/Element/gestureend_event"><code>gestureend</code> event</a>.
            </li>
            <li>
              Non-standard IE specific events on
              <a href="/en-US/docs/Web/API/Element#touch_events"><code>Element</code></a>:
              <a href="/en-US/docs/Web/API/Element/MSGestureStart_event"><code>MSGestureStart</code></a>,
              <a href="/en-US/docs/Web/API/Element/MSGestureChange_event"><code>MSGestureChange</code></a>,
              <a href="/en-US/docs/Web/API/Element/MSGestureEnd_event"><code>MSGestureEnd</code></a>,
              <a href="/en-US/docs/Web/API/Element/MSGestureHold_event"><code>MSGestureHold</code></a>,
              <a href="/en-US/docs/Web/API/Element/MSGestureTap_event"><code>MSGestureTap</code></a>.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>History</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/History_API">History API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#history_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>HTML element content display management</td>
        <td>
          <p>Events related to changing the state of a display or textual element.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/HTMLDetailsElement#events"><code>HTMLDetailsElement</code></a>,
          <a href="/en-US/docs/Web/API/HTMLDialogElement#events"><code>HTMLDialogElement</code></a>,
          <a href="/en-US/docs/Web/API/HTMLSlotElement#events"><code>HTMLSlotElement</code></a>.
        </td>
      </tr>
      <tr>
        <td>Inputs</td>
        <td>
          <p>
            Events related to HTML input elements e.g.
            <a href="/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a>, or
            <a href="/en-US/docs/Web/HTML/Element/textarea"><code>&lt;textarea&gt;</code></a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/HTMLElement#input_events"><code>HTMLElement</code></a>,
          <a href="/en-US/docs/Web/API/HTMLInputElement#events"><code>HTMLInputElement</code></a>.
        </td>
      </tr>
      <tr>
        <td>Keyboard</td>
        <td>
          <p>
            Events related to using a
            <a href="/en-US/docs/Web/API/KeyboardEvent">keyboard</a>.
          </p>
          <p>Used to notify when keys are moved up, down, or just pressed.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#keyboard_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/Element#keyboard_events"><code>Element</code></a>.
        </td>
      </tr>
      <tr>
        <td>Loading/unloading documents</td>
        <td>
          <p>Events related to loading and unloading documents.</p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/Document#load_unload_events"><code>Document</code></a>
            and
            <a href="/en-US/docs/Web/API/Window#load_unload_events"><code>Window</code></a>.
          </p>
        </td>
      </tr>
      <tr>
        <td>Manifests</td>
        <td>
          <p>
            Events related to installation of
            <a href="/en-US/docs/Web/Manifest">progressive web app manifests</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#manifest_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr id="media">
        <td>Media</td>
        <td>
          <p>
            Events related to media usage (including the
            <a href="/en-US/docs/Web/API/Media_Capture_and_Streams_API#events">Media Capture and Streams API</a>,
            <a href="/en-US/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
            <a href="/en-US/docs/Web/API/Picture-in-Picture_API#events">Picture-in-Picture API</a>, etc.).
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/ScriptProcessorNode#events"><code>ScriptProcessorNode</code></a>,
          <a href="/en-US/docs/Web/API/HTMLMediaElement#events"><code>HTMLMediaElement</code></a>,
          <a href="/en-US/docs/Web/API/AudioTrackList#events"><code>AudioTrackList</code></a>,
          <a href="/en-US/docs/Web/API/AudioScheduledSourceNode#events"><code>AudioScheduledSourceNode</code></a>,
          <a href="/en-US/docs/Web/API/MediaRecorder#events"><code>MediaRecorder</code></a>,
          <a href="/en-US/docs/Web/API/MediaStream#events"><code>MediaStream</code></a>,
          <a href="/en-US/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a>,
          <a href="/en-US/docs/Web/API/VideoTrackList#events"><code>VideoTrackList</code></a>,
          <a href="/en-US/docs/Web/API/HTMLTrackElement#events"><code>HTMLTrackElement</code></a>,
          <a href="/en-US/docs/Web/API/OfflineAudioContext#events"><code>OfflineAudioContext</code></a>,
          <a href="/en-US/docs/Web/API/TextTrack#events"><code>TextTrack</code></a>,
          <a href="/en-US/docs/Web/API/TextTrackList#events"><code>TextTrackList</code></a>,
          <a href="/en-US/docs/Web/HTML/Element/audio#events">Element/audio</a>,
          <a href="/en-US/docs/Web/HTML/Element/video#events">Element/video</a>.
        </td>
      </tr>
      <tr>
        <td>Messaging</td>
        <td>
          <p>
            Events related to a window receiving a message from another browsing
            context.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#messaging_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Mouse</td>
        <td>
          <p>
            Events related to using a
            <a href="/en-US/docs/Web/API/MouseEvent">computer mouse</a>.
          </p>
          <p>
            Used to notify when the mouse is clicked, doubleclicked, up and down
            events, right-click, movement in and out of an element, text
            selection, etc.
          </p>
          <p>
            Pointer events provide a hardware-agnostic alternative to mouse
            events. Drag and Wheel events are derived from mouse events.
          </p>
        </td>
        <td>
          Mouse events fired on
          <a href="/en-US/docs/Web/API/Element#mouse_events"><code>Element</code></a>
        </td>
      </tr>
      <tr>
        <td>Network/Connection</td>
        <td>
          <p>Events related to gaining and losing network connection.</p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/Window#connection_events"><code>Window</code></a>.
          </p>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/NetworkInformation#event_handler"><code>NetworkInformation</code></a>
            (<a href="/en-US/docs/Web/API/Network_Information_API">Network Information API</a>).
          </p>
        </td>
      </tr>
      <tr>
        <td>Payments</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Payment_Request_API">Payment Request API</a>.
          </p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/PaymentRequest#events"><code>PaymentRequest</code></a>,
            <a href="/en-US/docs/Web/API/PaymentResponse#events"><code>PaymentResponse</code></a>.
          </p>
        </td>
      </tr>
      <tr>
        <td>Performance</td>
        <td>
          <p>
            Events related to
            <a href="/en-US/docs/Web/API/Performance_API">High Resolution Time API</a>,
            <a href="/en-US/docs/Web/API/Performance_Timeline">Performance Timeline API</a>,
            <a href="/en-US/docs/Web/API/Navigation_timing_API">Navigation Timing API</a>, <a href="/en-US/docs/Web/API/User_Timing_API">User Timing API</a>,
            and
            <a href="/en-US/docs/Web/API/Resource_Timing_API">Resource Timing API</a>.
          </p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/Performance#events"><code>Performance</code></a>.
          </p>
        </td>
      </tr>
      <tr>
        <td>Pointer</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Pointer_events">Pointer Events API</a>.
          </p>
          <p>
            Provides hardware-agnostic notification from pointing devices
            including Mouse, Touch, pen/stylus.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#pointer_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/HTMLElement#pointer_events"><code>HTMLElement</code></a>.
        </td>
      </tr>
      <tr>
        <td>Print</td>
        <td>
          <p>Events related to printing.</p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#print_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Promise rejection</td>
        <td>
          <p>
            Events sent to the global script context when any JavaScript promise
            is rejected.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#promise_rejection_events"><code>Window</code></a>.
        </td>
      </tr>
      <tr>
        <td>Sockets</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/WebSockets_API">WebSockets API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/WebSocket#events"><code>Websocket</code></a>.
        </td>
      </tr>
      <tr>
        <td>SVG</td>
        <td>
          <p>Events related to SVG images.</p>
        </td>
        <td>
          <p>
            Events fired on
            <a href="/en-US/docs/Web/API/SVGElement#events"><code>SVGElement</code></a>,
            <a href="/en-US/docs/Web/API/SVGAnimationElement#events"><code>SVGAnimationElement</code></a>,
            <a href="/en-US/docs/Web/API/SVGGraphicsElement#events"><code>SVGGraphicsElement</code></a>.
          </p>
        </td>
      </tr>
      <tr>
        <td>Text selection</td>
        <td>
          <p>
            <a href="/en-US/docs/Web/API/Selection">Selection API</a> events
            related to selecting text.
          </p>
        </td>
        <td>
          <p>
            Event (<code>selectionchange</code>) fired on
            <a href="/en-US/docs/Web/API/HTMLTextAreaElement/selectionchange_event" title="HTMLTextAreaElement"><code>HTMLTextAreaElement</code></a>,
            <a href="/en-US/docs/Web/API/HTMLInputElement/selectionchange_event" title="HTMLInputElement"><code>HTMLInputElement</code></a>.
          </p>
        </td>
      </tr>
      <tr>
        <td>Touch</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Touch_events">Touch Events API</a>.
          </p>
          <p>
            Provides notification events from interacting with a touch sensitive
            screen (i.e. using a finger or stylus). Not related to the
            <a href="/en-US/docs/Web/API/Force_Touch_events#events">Force Touch API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#touch_events"><code>Document</code></a>,
          <a href="/en-US/docs/Web/API/Element#touch_events"><code>Element</code></a>.
        </td>
      </tr>
      <tr>
        <td>Virtual reality</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
          </p>
          <div class="notecard warning" id="sect3">
            <p>
              <strong>Warning:</strong> The
              <a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a> (and
              associated
              <a href="/en-US/docs/Web/API/Window#webvr_events"><code>Window</code> events</a>) are deprecated.
            </p>
          </div>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/XRSystem#events"><code>XRSystem</code></a>,
          <a href="/en-US/docs/Web/API/XRSession#events"><code>XRSession</code></a>,
          <a href="/en-US/docs/Web/API/XRReferenceSpace#events"><code>XRReferenceSpace</code></a>.
        </td>
      </tr>
      <tr>
        <td>RTC (real time communication)</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/RTCDataChannel#events"><code>RTCDataChannel</code></a>,
          <a href="/en-US/docs/Web/API/RTCDTMFSender#events"><code>RTCDTMFSender</code></a>,
          <a href="/en-US/docs/Web/API/RTCIceTransport#events"><code>RTCIceTransport</code></a>,
          <a href="/en-US/docs/Web/API/RTCPeerConnection#events"><code>RTCPeerConnection</code></a>.
        </td>
      </tr>
      <tr>
        <td>Server-sent events</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Server-sent_events">server sent events API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/EventSource#events"><code>EventSource</code></a>.
        </td>
      </tr>
      <tr>
        <td>Speech</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a>.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/SpeechSynthesisUtterance#events"><code>SpeechSynthesisUtterance</code></a>.
        </td>
      </tr>
      <tr>
        <td>Workers</td>
        <td>
          <p>
            Events related to the
            <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers API</a>,
            <a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a>,
            <a href="/en-US/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API</a>, and
            <a href="/en-US/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a>.
          </p>
          <p>
            Used to respond to new messages and message sending errors. Service
            workers can also be notified of other events, including push
            notifications, users clicking on displayed notifications, that push
            subscription has been invalidated, deletion of items from the content
            index, etc.
          </p>
        </td>
        <td>
          Events fired on
          <a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope#events"><code>ServiceWorkerGlobalScope</code></a>,
          <a href="/en-US/docs/Web/API/DedicatedWorkerGlobalScope#events"><code>DedicatedWorkerGlobalScope</code></a>,
          <a href="/en-US/docs/Web/API/SharedWorkerGlobalScope#events"><code>SharedWorkerGlobalScope</code></a>,
          <a href="/en-US/docs/Web/API/WorkerGlobalScope#events"><code>WorkerGlobalScope</code></a>, <a href="/en-US/docs/Web/API/Worker#events"><code>Worker</code></a>,
          <a href="/en-US/docs/Web/API/WorkerGlobalScope#events"><code>WorkerGlobalScope</code></a>,
          <a href="/en-US/docs/Web/API/BroadcastChannel#events"><code>BroadcastChannel</code></a>,
          <a href="/en-US/docs/Web/API/MessagePort#events"><code>MessagePort</code></a>.
        </td>
      </tr>
    </tbody>
  </table></figure></div>
</details>

Most common events
| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

Can also add event listeners directly into HTML. E.g.
```html
<button onclick='alert("clicked")'>click me</button>
``` 
## Promises
3 states of promise object: 
1. pending - Currently running asynchronously
2. fulfilled - Completed successfully
3. rejected - Failed to complete
Resolve is called to set the promise to resolved, likewise with reject
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
### `then`, `catch`, `finally`
The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is rejected, and `finally` is always called after all the processing is completed.
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

//We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

### Observer pattern
Another way to do asynch processing in JavaScript.
"Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution."
## async/await
**Coin toss with `then`/`catch` chain**
```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
};
```
**Coin toss with `async`, `try`/`catch` chain**
```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
### async
- The `async` keyword declares that a function returns a promise.  
- Must call `await` in top level of the JavaScript *or* in a function with `async` keyword  

Applying `async` makes the return value a promise that's immediately resolved, with value of the return value
```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
Explicit promise creation:
```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
// because the promise's execution function has not yet resolved.
```
```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
## Debugging
- `console.log` statements
- browser debugging - breakpoints, stepping

# Simon JavaScript Notes
- `localStorage.setItem("key", foo.value);` sets variable in browser's local storage cache
- `localStorage.getItem('scores');` get from local storage cache
  - may need to parse JSON using `JSON.parse(scoresText);`
- `document.createElement('td');` makes element to be stored in a variable
  - `roeEl.appendChild(nameTdEl);` to add children, then `tableBodyEl.appendChild(rowEl);` to add to DOM (`tableBodyEl` was selected using `document.querySelector`)
- `window.location.href = "play.html"` change page

# Web Services
## URL - Unifiorm Resource Locator
`<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>`
- URN (Uniform Resource Name) doesn't specify location information 
- URI (Uniform Resource Identifier): general, refers to either URN or URL

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                    |

## Ports
- Allow device to supoort multiple protocols (e.g. HTTP, HTTPS, FTP, SSH) as well as different types of services (e.g. search, document, authentication)
- can be externally exposed or only internally used
- IANA defines standard usage for port numbers
  - 0 - 1023 for standard protocols
  - 1024 - 49151 assigned to requesting entities
  - 49152  - 65535 dynamic, used to create dynamic connections to a device

Common Ports:
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

- on my server: 
  - port 22 open for SSH
  - 443 for HTTPS
  - 80 for HTTP
  - Caddy listening on ports 80 and 443 (redirects 80 to 443)
    - if URL path matches static file, reads off disk and returns it
    - if HTTP path matches one of definitions it has for gateway service, it makes connection on that service's port (3000 for simon, 4000 for startup)

## HTTP
Requests and Responses
- `curl -v -s <URL>` helps us see this in action
### Request
Syntax:
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
- `verb` - `GET`, ...
- Header examples
  - `Host:` requested host (i.e. domain name)
  - `Accept:` what type of resources client will accept (always MIME type)
### Response
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
### Verbs
| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |
### Status Codes
- 1xx informational
- 2xx success
- 3xx redirect to other location, or that the previously cached resource is still valid
- 4xx client error - invalid request
- 5xx server error

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |
### Headers
Specify metadata about request or response. e.g. security handling, data formates, cookies
| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |
### Body
Defined by `Content-Type` header
- e.g. may be HTML text, binary image format, JSON, JavaScript
### Cookies
- HTTP stateless, so one request knows nothing about previous or future requests
- Cookie = solution: track state across requests
- server generated, passed to client as HTTP header
- client caches cookie, returns it back as HTTP header on subsequent requests
- allows server to remember things like language preference of user, authentication credentials, track everything a user does
### SOP and CORS
- Same Origin Policy (SOP) - JavaScript can only make requests to a domain if it's the same domain the user is currently viewing
- Then introduces problem: if you want to build a service that any web app can use, it would violate SOP and fail
- Solution: Cross Origin Resource Sharing (CORS)
- CORS allows client to specify origin of request and let server respond with what origins are allowed
- To make requests to other sites form your site, their site needs to allow you through `Access-Control-Allow-Origin` header

## Fetch
Make HTTP requests from JavaScript
- Basic usage: takes URL, returns promise. the `then` function takes a callback function that is called asynch when requested URL content is obtained
- if returned content is type `application` or `json` you can use the `json` function 
Example
```js
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```
*Response*
```js
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```
*Post Example* - Populate options parameter with HTTP method and headers
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```
## Service Design
- KISS - primary objects are what user would expect in workflow
- Sequence Diagram with primary objects of app
### Endpoints
- Service endpoints, often called Application Programming Interface (API)  
Endpoint design considerations:
1. Grammatical - HTTP means everything is a resource to GET, PUT, etc.
2. Readable - resource readable in URL path
3. Discoverable - ?
4. Compatible - add new functionality without breaking existing clients
5. Simple - no parallel access routes to resources, only one way to act on resource, endpoints do only one thing
6. Documented - see [Open API Specification](https://spec.openapis.org/oas/latest.html)

### Models for Exposing Endpoints
- RPC - Remote Procedure Call
  - service endpints are simple function calls
  - usually just POST
  - function name either in URL path or a parameter in POST body
- REST - Representational State Transfer
  - take advantage of foundational principles of HTTP
  - always act upon resource
  - use proper HTTP verbs
- GraphQL
  - focuses on manipulation instead of function call (RPC) or resource (REST)
  - Queries specify desired data and how it should be joined or filtered
  - helps remove lot of the logic for parsing endpoints and mapping requests to specific resources
  - basically only one endpoint: query endpint
  - downside: client has significant power to consume resources on the server
    - also hard to implement auth rights to data, as they must be baked into the data schema
  - Standards on how to define complex schema do exist
## Node.js
Deploy JavaScript outside of browser.  
- Uses Chromium V8 engine from Google that is used in browsers and uses it in a console application instead
### Node commands
`node` followed by whatever
- `node -e "console.log(1+1)"` execute line of JavaScript
- `node main.js` run main.js
- just `node` runs in interpreter mode, making console a JavaScript console
### Node Package Manager `npm`
- install package locally on machine using `npm`, then `require` statement in code that references the [ackage name]
### `package.json`
Contains:
1. Metadata about project such as name and default entry JS file
2. Commands you can execute to run, test, distribute, etc. your code
3. Packages this project depends on  
Don't check `node-modules` into Git repo, it will be large, can be rebuilt using `package.json` and `package-lock.json` files
- include in `.gitignore` file
- `npm install` will install the previously installed packages if you move the project to another location  
Just remember the main steps:
1. Create your project directory
2. Initialize it for use with NPM by running `npm init -y`
3. Make sure `.gitignore` file contains `node-modules`
4. Install any desired packages with `npm install <package name here>`
5. Add `require('<package name here>')` to your JavaScript code
6. Run your code with `node main.js`
### Creating a web service
- `http.createServer` callback takes a request and respons object
  - this function is called whenever server receives an HTTP request
- `server.listen()` listens on a port and blocks until program is terminated
```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node.js!</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
### For further research
- Node.js successor, more secure: Deno
- competitor: Bun
## Express
- more robust framework for full web service (as opposed to simple web server using Node.js)
- Call express constructor to create express app and lsten for HTTP requests on desired port
```js
const express = require('express');
const app = express();

app.listen(8080);
```
### Defining routes
- HTTP endpoints implemented by defining routes that call a function based on HTTP path
- e.g. get for /store/provo
```js
app.get('/store/provo', (req, res, next) => {
  res.send({ name: 'provo' });
});
```
- get function takes two params: URL path matching pattern, and callback function called when pattern matches
- callback 3 params: HTTP req object, response object, and next routing function called if the routing function wants another function to generate a repsonse
- path pattern parameters, prefix with colon, reference params with `req.params` object
```js
app.get('/store/:storeName', (req, res, next) => {
  res.send({ name: req.params.storeName });
});
```
- also wildcard and regex
```js
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));
```
### Middleware
- design pattern
- mediator and middleware
- middleware: componentized pieces of functionality
- mediator loads middleware components and determines order of execution
- Express mediator, middleware functions are middleware components
- middleware function pattern:
```
function middlewareName(req, res, next)
```
```js
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```
- Order matters
- Built-in middleware
  - `static` responds with static files found in directory matching request URL- `app.use(express.static('public'));`
    - with this, you can create directory called `public`, then e.g. put `index.html` file that will return it when service is called without path
- Third party middleware
  - Use npm to install package, include with `require` function
```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});
```
- Error-handling middleware `function errorMiddlewareName(err, req, res, next)`
- FULL EXAMPLE
```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Debug Node.js
Built-in in VSCode
- "Start Debugging" - F5, select Node.js debugger
- Breakpoints, step into, over, continue, etc.
### Debugging Node.js web service
- Can set breakpoints in endpoint callback and browser will await, breakpoint will pause execution
### Nodemon
- Wrapper around node that watches for file changes (saves) and upon detecting a change, restarts notes automatically (to save time in debug)
- `npm install -g nodemon`
- VSCode launch config: Command Palette (CMD+SHIFT+P) > Debug: add configuration > Node.js > Node.js: Nodemon setup > program from app.js to main.js (or whatever the main JS file is for your app), and save config file
## Service Daemons - PM2
- Default behavior: program close when you close console or computer restarts
- Solution (keep programs running): register program as daemon
  - PM2 - Process Manager 2
- PM2 pre-installed on AWS server as part of AMI we selected on creation
- Deployment script modifies PM2 to register and restart web services  

| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon-react --update-env**                   | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs     
### Registering new web service
1. Add rule to Caddyfile to tell it how to direct requests for the domain
2. Create a directory and add the files for the web service
3. Configure PM2 to host the web service

*Caddyfile*  
Copy and alter for your use case, using different port that isn't used:
```
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```
- this tells Caddy to act as proxy for requests to `taco.cs260.click`, pass on to web service listening on the same machine, on port 5000
- The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS).
- Restart caddy to load new settings: `sudo service caddy restart`
*Create web service*  
- Copy startup directory
- You'll see `index.js`, main JS file for web service
  - Has code to listen on designated network port and respond to requests
```js
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
- Also: directory `public` that has static HTML/CSS/JS files that your web service will respond with when requested. `index.js` enables this with: `app.use(express.static('public'));`
- Start web service listening on port 5000, using Node as follows: `node index.js 5000`
- Can now access service through browser or `curl`
*Configure PM2 to host web service*  
- Problem: above won't persist after ending SSH session - app will stop
- `pm2 ls` on SSH session
- Navigate to service directory, then run command similar to following:
```
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```
## UI Testing
- TDD (Test Driven Development)
- Automating browser using Playwright
- Selenium often slow/flaky
- Playwright - newcomer, backed by Microsoft, good VSCode integration, runs a Node.js process, one of least flaky frameworks
- `npm init playwright@latest`
### BrowserStack
- many devices, BrowserStack helps with this, can use with Selenium or interactively
- Uses physical devices hosted in data center
## Endpoint Testing
- easier than UI b/c doesn't require browser
- Current champion according to State of JS survey: Jest
- (example Express endpoints)
- Initialize app by exporting, then import into separate file to run service
  - This way, we can start service when we run normally AND when we use test framework
- Call Jest `test` function (no need for `require`)
```js
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```
- description parameter, human readable
- function call parameter
- `-D` flag for development in npm, won't be included in production release builds
- edit `package.json` `scripts` to:
```json
"scripts": {
  "test": "jest"
},
```
- need `supertest` npm package to send HTTP requests without having to actually send them over the network
- To make an HTTP request you pass the Express app to the supertest request function and then chain on the HTTP verb function that you want to call, along with the endpoint path. You can then chain on as many expect functions as you would like. 
- If something goes wrong, the end function will contain an error and we pass the error along to the done function. Otherwise we just call done without the error.
```js
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});

test('updateStores saves the correct value', (done) => {
    request(app)
      .get('/store/provo')
      .expect(200)
      .expect({ name: 'provo' })
      .end((err) => (err ? done(err) : done()));
  });
  ```
## Simon Service notes
- express `app.use(express.static('public'));` serves up front end code from public directory, service only handles endpoint requests
- don't include `node_modules` in github repo (would make a large repo, especially if there are updates)
- `process` node object, `argv` array to access arguments from commandline
- JSON parse built-in middleware `express.json()`
- `express.Router` api router for service endpoints
  - ``app.use(`/api`, apiRouter);``
- don't forget about `?` ternary operator:
  - `(expression ? valIfTruthy : valIfFalsy)`
- underscore before identifier (var, function parameter, etc.) convention for some JS devs: "ignore this binding/parameter"
- no path in express `app.use` (and only having the callback function) will redirect unknown paths to this endpoint (???)