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

    Ans: 