// Function to calculate total price
function calculateTotal() {
    let items = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
  
    items.forEach(item => {
      total += parseFloat(item.price);
    });
  
    // Display total price
    document.getElementById("total-price").innerText = "Rs " + total.toFixed(2);
  }
  
  // Call the function to display total when the page loads
  window.onload = function() {
    calculateTotal();
  };

  // Show order completion notification when Place Order is clicked
const placeOrderButton = document.querySelector(".submit-btn");  // This selects your "Place Order" button
const orderNotification = document.getElementById("order-notification");

placeOrderButton.addEventListener("click", function (event) {
  // Prevent the form from actually submitting if it's a form submission button
  event.preventDefault();

  // Show the order completion notification
  orderNotification.style.display = "block";

  // Optionally, hide the notification after 5 seconds
  setTimeout(function () {
    orderNotification.style.display = "none";
  }, 5000); // Notification disappears after 5 seconds
});
