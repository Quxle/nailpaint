// Load cart count on every page
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
  });
  
  // Function to add to cart
  function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
  }
  
  // Update cart icon count
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
  }
  
  // Show cart items on cart.html
  function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let list = document.getElementById("cart-list");
    let total = 0;
  
    list.innerHTML = "";
  
    cart.forEach(item => {
      let li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      list.appendChild(li);
      total += item.price;
    });
  
    document.getElementById("total").innerText = `Total: ₹${total}`;
  }
  