/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  */ 
 
 function menuMaker(menuobj){
   
   const menuIs = document.createElement('div');
   const ulmenu = document.createElement('ul');
   
   menuIs.appendChild(ulmenu);
   
   menuIs.classList.add('menu');  
   
   menuobj.forEach(element => {   
     const li = document.createElement('li');
     li.textContent = element;
     ulmenu.appendChild(li)
    });   
    
  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
    const btnHTML = document.querySelector('.menu-button'); 

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div 
  // with a 'menu' class).
    
    btnHTML.addEventListener('click', () => {     
      menuIs.classList.toggle('menu--open') })

    // Step 5: return your div with a 'menu' class.
  return menuIs;
} // close menuMaker
  
  
  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  const headerHTML = document.querySelector('.header');
  headerHTML.appendChild(menuMaker(menuItems));

