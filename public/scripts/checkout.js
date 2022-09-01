const changeQuantity = function (cart_id, quant) {
  $.ajax({
    method: 'POST',
    url: '/api/quantity',
    data: {cart_id, quant}
  })
  .done((response) => {
    console.log("Quantity changed");
  });
};

const sendText = function (total) {
    $.ajax({
      method: 'POST',
      url: '/api/twilio',
      data:{total}
    })
    .done((response) => {
      console.log("Added to cart");
    });
};

const submitOrder = function (total) {
  $.ajax({
    method: 'POST',
    url: '/api/order',
    data: {cart_id, quant}
  })
  .done((response) => {
    console.log("Order submitted");
  });
};

const deleteItem = function (cart_id) {
  $.ajax({
    method: 'POST',
    url: '/api/delete',
    data: {cart_id}
  })
  .done((response) => {
    console.log("Deleted Item");
  });
};

const clearCart = function () {
  $.ajax({
    method: 'POST',
    url: '/api/clear',
    data: {}
  })
  .done((response) => {
    console.log("Deleted Cart");
  });
};

const renderCheckout = function () {
  $.ajax({
    method: "GET",
    url: "/api/checkout",
  }).done((response) => {
    const $checkoutList = $(".items-checkout");
    $checkoutList.empty();
    $('#subtotal').empty();
    let sum = 0;

    for (const checkout of response.items) {
      $(
        `
        <div id="cartCategories">
              <img src="${checkout.img}"  width="75" height="75">
              <span>${checkout.name}</span>
              <span>
              <select name="quantity" id="adjustItemQuantity" onChange="renderAndUpdate(${checkout.cart_id}, this.value)">
                      <option selected="selected" value="${checkout.quantity}">${checkout.quantity}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
              </select>
              </span>
              <span>Price: $${(checkout.price / 100) * checkout.quantity}</span>
              <span>
              <input class="btn btn-primary" type="submit" value="delete" onClick="deleteAndUpdate(${checkout.cart_id})">
              </span>
            </span>
        </div>`
      ).appendTo($checkoutList);
      sum += checkout.price * checkout.quantity;
    }
    let taxes = (sum / 100) * 0.13;
    let subtotal = sum / 100;
    let total = (subtotal + taxes).toFixed(2);
    $(`
    <div id="bottomCheckoutOutput">
      <div><button id="submit-button" onClick="sendText(${total});window.location.href='/confirmation'; clearCart()">Order Now</button></div>
      <div id="checkoutSum">
        <div >
          <p>Subtotal: </p>
          <p>Taxes: </p>
          <p class="totalFSize">Total: </p>
        </div>
        <div id="totalPrices">
          <p>$${sum / 100}</p>
          <p>$${taxes.toFixed(2)}</p>
          <p class="totalFSize">$${total}</p>
        </div>
      </div>
    </div>
      `).appendTo(`#subtotal`);
  });
};

const renderAndUpdate = function (cartId, quant) {
  changeQuantity(cartId, quant);
  renderCheckout();
};

const deleteAndUpdate = function (cart_Id) {
  deleteItem(cart_Id);
  renderCheckout();
};

$(document).ready(function () {
  renderCheckout();
});



