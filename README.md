Q1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById selects a single element by its ID and it is very fast. getElementsByClassName selects all elements with a specific class and returns a live HTMLCollection. querySelector returns the first element that matches any CSS selector and querySelectorAll returns all matching elements as a static NodeList.

Q2: How do you create and insert a new element into the DOM?
Answer:
We can create and insert a new element into DOM in 3 steps.
1.Create the element using document.createElement().
2.Set its content or attributes like text, classes, or id.
3.Insert it into the page using a DOM method like appendChild or prepend.

Q3.What is Event Bubbling? And how does it work?
Answer:
Event bubbling is when an event starts at the element that triggered it and then propagates up to its parent elements and beyond, so parents can also respond to the event unless stopped.

Q4. What is Event Delegation in JavaScript? Why is it useful?
Answer:Event delegation is attaching a single event listener to a parent element to handle events on its children, which works because of bubbling. It is useful because it reduces memory usage, improves performance and works for dynamically added elements.

Q5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:preventDefault() is used to stop the default action of an element, like preventing a link from opening or a form from submitting.
stopPropagation() is used to stop the event from bubbling up to parent elements, so only the element that triggered it handles the event.