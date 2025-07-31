$(document).ready(function () {
  let cart = [];
  
  $('.add-to-cart').click(function () {
    const card = $(this).closest('.card');
    const name = card.find('.card-title').text();
    const price = parseFloat(card.find('.card-text').text().replace('', ''));
    const quantity = parseInt(card.find('.quantity').val());

    // Check if product already in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ name, price, quantity });
    }

    updateCart();
  });

  function updateCart() {
    let totalItems = 0;
    let summaryHtml = '<ul class="list-group">';

    cart.forEach(item => {
      totalItems += item.quantity;
      summaryHtml += `<li class="list-group-item d-flex justify-content-between align-items-center">
                        ${item.name} x ${item.quantity}
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                      </li>`;
    });

    summaryHtml += '</ul>';

    $('#cart-count').text(totalItems);
    $('#cart-summary').html(cart.length ? summaryHtml : '<p>No items in cart.</p>');
  }
});
