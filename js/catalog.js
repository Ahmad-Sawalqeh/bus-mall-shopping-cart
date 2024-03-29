/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  // TODO: Add an <option> tag inside the form's select for each product
  // Done
  var selectTag = document.getElementById('items');
  for (var i = 0 ; i < Product.allProducts.length ; i++) {
    var optionItem = Product.allProducts[i];
    var optionTag = document.createElement('option');
    optionTag.textContent = optionItem.name;
    optionTag.value = optionItem.name;
    selectTag.appendChild(optionTag);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  // Done
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
// Done
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // Done
  var selectedItemName = document.getElementById('items').value;
  // TODO: get the quantity
  // Done
  var quantityValue = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
  // Done
  cart.addItem(selectedItemName, quantityValue);

  // var newItem = new Cart(selectedItemName, quantityValue);
  // cart.items.push(newItem);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
// Done
function updateCounter() {
  var numberOfItems = cart.items.length;
  var cartItems = document.getElementById('itemCount');
  cartItems.innerHTML = '(' + numberOfItems + ')';
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// Done
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // Done
  var selectedItemName = document.getElementById('items').value;
  var quantityValue = document.getElementById('quantity').value;
  // TODO: Add a new element to the cartContents div with that information
  // Done
  var divOfSelectedItems = document.getElementById('cartContents');
  divOfSelectedItems.innerHTML += selectedItemName + ' : ' + quantityValue +  '<br>';
  divOfSelectedItems.setAttribute('style','display:block');
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();