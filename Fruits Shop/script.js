let cart = [];    // Empty cart initialized 
let Total = 0;

function addtoCart(item, price) {
    cart.push({
        name: item,
        price: price
    });
    Total += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';  // Clears the previous items

    cart.forEach(item => {  // Iterate over every item in cart array
        const p = document.createElement('p');  // Create a new paragraph
        p.innerText = `${item.name}: Rs.${item.price.toFixed(2)}`;  // Set item name and price
        cartItemsDiv.appendChild(p);  // Add the paragraph to the cart display
    });

    document.getElementById('Total').innerText = Total.toFixed(2); // Update total display
}
