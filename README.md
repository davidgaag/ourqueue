# OurQueue

OurQueue is a cross-platform, collaborative music queuing app. Create a queue on the host device and have your friends join and add songs to the queue. Customize your queue's settings by setting queue cooldowns or by letting your friends vote for the next song. Use OurQueue to spice up a long roadtrip or to let guests participate in making your party's soundtrack!

![OurQueue mock](/assets/ourqueue-mock.jpeg)

### Key Features:
- Create and join a group queue
- Anyone can add songs to the queue
- Vote for the next song
- Cross-platform - supports Spotify and Apple Music
- View the song history and open them in your streaming service

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
# AWS Server info
Domain/URL: [http://dug-cs.link](http://dug-cs.link)  
Elastic IP: `http://3.140.147.76`  
ssh command:   
`ssh -i 260-204-key-pair.pem ubuntu@3.140.147.76`