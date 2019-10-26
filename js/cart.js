/* global Cart */
'use strict';

var tbody = document.getElementsByTagName('tbody');
var tfoot = document.getElementsByTagName('tfoot');

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart'));
  cart = new Cart(cartItems);
  // console.log('cart : ', cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody[0].innerHTML = '';
  tfoot[0].innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // Done
  for(var ItemRow = 0 ; ItemRow < cart.items.length ; ItemRow++ ){
    // TODO: Create a TR
    // Done
    var tr = document.createElement('tr');
    tbody[0].appendChild(tr);
    // TODO: Create a TD for the delete link, quantity,  and the item
    // Done
    var td = document.createElement('td');
    // var aLink = document.createElement('a');
    td.textContent = 'X';
    // td.appendChild(aLink);
    tr.appendChild(td);

    td = document.createElement('td');
    tr.appendChild(td);

    // td.textContent = Product.name;
    console.log('cart.items : ', cart.items);




    // for(var itemContent = 1 ; itemContent < 3 ; itemContent++ ){
    //   td = document.createElement('td');
    //   tr.appendChild(td);
    //   td.innerHTML = '' + cart.items[itemContent];
    // }

  }
  
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // Done
  cart.removeItem();
  // TODO: Save the cart back to local storage
  // Done
  var itemString = JSON.stringify(cart.items);
  // var itemString = localStorage.getItem('Content Cart');
  localStorage.setItem('Content Cart', itemString);
  // localStorage.clear();

  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();