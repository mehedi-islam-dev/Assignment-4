1. What is the difference between getElementById, getElementsByClassName,
   and querySelector / querySelectorAll?
   
   Ans: getElementById---->
            -- find or grab a single element by its unique ID name,
            -- returns a single html element, returns null when it doesn't exist
        
        getElementsByClassName---->
            -- finds all the element with a specific class name in the page
            -- returns a collection of html element
            -- provide an array

        querySelector---->
            -- grabs or find the very first element of any id or class
            -- returns a single element
        
        querySelectorAll---->
            -- finds all the elements in a css selector 
            -- returns node list like an array

2. How do you create and insert a new element into the DOM?
    
    Ans: Create --> Customize --> Select Parent --> Insert into Dom
            step 1: document.createElement('Name')
            Step 2: element.textContent ="New text"
                    element.classList.add("cls name")
            Step 3: document.getElementById('container')
            Step 4: appendChild()--into the parent

3. What is Event Bubbling? And how does it work?

    Ans: Event Bubbling is a mechanisms where, when an event starts in a targeted element 
         it propagates upwards (from child to parent) to its parent of the DOM.

         How it works?
           1. Capture: when an event starts it travels down of the DOM tree to the target element
           2. Reach the target element and execute
           3. Travels back to upward from the target element to handle its parent

4. What is Event Delegation in JavaScript? Why is it useful?

    Ans: A smart event handling technique,
         Where a single event listener is attached to a common parent element  to
         manage that event for all of its child elements.
    
    Useful Beacuse:

        --> Takes small space/memory
        --> Can handle dynamic elements
        --> makes UI clean and easier to debug

5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans: preventDefault() --->

            --> It prevent browsers default action
            --> But event continues to bubble up 
            --> use to validate a form before submitting
        
        stopPropagation() --->

            --> Event stops in any current element
            --> Stops the event from bubbling up
            --> Doesn't prevent browsers default actions