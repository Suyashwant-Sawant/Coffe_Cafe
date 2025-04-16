function showQRCode(product) {
    const qrImage = document.getElementById('qr-image');
    // Set the source to the QR code image based on the product
    qrImage.src = `images/QR.jpeg`; // Change based on your image naming
    document.getElementById('qr-code').style.display = 'block';
}

function closeQRCode() {
    document.getElementById('qr-code').style.display = 'none';
}

function addToCart(productName, price) {
    // Get the cart from local storage or initialize it if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push({ productName, price });

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Alert the user that the item has been added to the cart
    alert(`Your order for ${productName} has been added to the cart.`);
}


