const CartItems = document.querySelector(".cart-items");
const CartTotalValue = document.getElementById("cart-total-value"); // For total value display

// Display Cart Items
function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  CartItems.innerHTML = ""; // Clear previous content before rendering

  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <button class="cart_delete" data-index="${index}">Delete</button>
    `;
    CartItems.appendChild(cartItem);
  });

  // Add event listeners to delete buttons
  document.querySelectorAll(".cart_delete").forEach((button) => {
    button.addEventListener("click", deleteCartItem);
  });

  // Calculate total value when cart is displayed
  calculateTotal();
}

// Calculate Total Price
function calculateTotal() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  items.forEach((item) => {
    total += parseFloat(item.price);
  });

  // Update the total value in the cart page
  CartTotalValue.textContent = total.toFixed(2);
}

// Delete Cart Item
function deleteCartItem(event) {
  const index = event.target.dataset.index; // Get the index of the item to delete
  let items = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove the item from the array
  items.splice(index, 1);

  // Update the localStorage with the new array
  localStorage.setItem("cart", JSON.stringify(items));

  // Refresh the cart display
  displayCartItems();

  // Recalculate the total after deletion
  calculateTotal();
}

// Initial display of cart items
displayCartItems();
