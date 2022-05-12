
// Creates the parent DOM-element. It takes one parameter, an array of JS objects representing its children
const createParentListEle = (kids) => {

    // Change this to suit your needs (eg. 'select' for a dropdown menu, 'tr' for a table-row)
    const ele = document.createElement('ul');

    // If this is the only element on the page, set its id
    // Probably don't do this for the 'tr' example, since your table might have more than one row.
    // If your table will only ever have one row, then it probably shouldn't be a table
    ele.id = 'theOnlyKidParentEle';

    // When you have a reference to an element in JS, you now have access its many properties using dot notation
    //   including eventListeners and style properties

    // You can get a reference to a single element by using querySelector(selector),
    //   or querySelectorAll(selector) for multiple elements,
    // In our case, we have a reference to the element since we just created it and assigned it to the ele variable

    // Class names can be added here as a comma-seperated array of strings
    ele.classList.add('kidlist', 'collapsed');

    // Before we return the parent DOM element, we must first add the children
    ele.append(

        // Map each arrayelement to a child dom-element.
        // The map function in JS works just like it does in Java-
        // it returns a new array where each array-element is the return value of the function passed to it
        // In this case, each arrayElement is mapped to a raw HTML string returned by the createKidEle function
        ...kids.map(kid => createChildEle(kid)));

    return ele;
}

// CREATE PARENT LIST ELEMENT
const createChildEle = (kid) =>  {

    // Change this to suit your needs (eg. 'option' for a dropdown menu, 'td' for a table-row)
    const ele = document.createElement('li');

    // This is the raw HTML string representing each child dom-element.
    // It uses template strings, which allow us to use single and double quotes without escaping them
    // To substitute a JS variable, wrap it in ${variableName}
    ele.innerHTML =
        `
            <li class="kid" style="display: inline-block">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${kid.index}.png" />
                <div style="padding-left: 20px; margin-bottom: 10px">${kid.name}</div>
            </li>
        `;

    // Note that we can still access properties with dot notation:
    ele.classList.add("another_class");
    console.log("I'm a " + ele.tagName + " element! I was just created within a funciton!");

    return ele;
}

/*
 *  Note that these two functions set the element content in different ways.
 *  The parent element is simply a container for its children, so its content is usually pretty simple: kids
 *  ...so the map is perfect for this- no need to explode it into text, it can stay in "object" form
 *
 *  Since my child elements have a more complex structure, ie. inline styles and nested elements, I prefer to set
 *  their content via a template string.
 *
 *  This is closer to the concept of WYSIWYG- What You See Is What You Get
 *  It is easier to visualize than it would be if we were to set each style element on a single line like in example 1
 *  Also, most IDE's are now smart enough now to know that you're writing a DOM element,
 *  so you get syntax highlighting and code completion for HTML even though you're in a JS file!
*/


/*
 * Note this is a very bare-bones implementation of a "componenet"
 * This word can have a lot of different meanings, but I'm referring to re-usable front-end components eg. React
 * React requires:
 *   Node.js be installed on your machine and must be run via cmd or automated script to serve
 *   A package manager like npm or yarn to manage its many dependencies
 * This, however, requires nothing external, not even JJQuery.
 * You can see this concept in action by copy-pasting it into your browser's console and //TODO running this code
*/

/*
//TODO
[ ] Lack of grey b/w .jsp and .html
[ ] \${}

[ ] BAD INFO ALERT: $Anything is JQuery
[ ]   $ is a valid character in a JS variable name, but is usually reserved for JQuery.

        These are both JQuery: $(selector)    $.(query_function).(next_jquery_function_in_chain)
        This is Vanilla JS, within a string literal:
        `
          this line is all "static" text, and those quotes around the word static are ok without the escape char
          ${variableName}
          the previous line will show whatever's enclosed
      `
      TL;DR, Don't name your variables/functions with a single $


[ ] How to call functions

[ ] How to handle errors on the front-end

[ ] HTMLCollection vs NodeList
[ ] "..." aka the spread/rest operator

[ ] calling properties dynamically with bracket notation:
https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

[ ] Missing:
[ ] Change detection
[ ] String sanitization


*/