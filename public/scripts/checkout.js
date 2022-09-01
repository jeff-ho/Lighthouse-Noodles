const changeQuantity = function (cart_id, quant) {
  $.ajax({
    method: 'POST',
    url: '/api/quantity',
    data: {cart_id, quant} // added -<<<<<< this
  })
  .done((response) => {
    console.log("Quantity changed")
  });
};

const sendText = function (total) {
    $.ajax({
      method: 'POST',
      url: '/api/twilio',
      data:{total}
    })
    .done((response) => {
      console.log("Added to cart")
    });
}


const submitOrder = function (total) {
  $.ajax({
    method: 'POST',
    url: '/api/order',
    data: {cart_id, quant} // added -<<<<<< this
  })
  .done((response) => {
    // const $cartList = $('<div></div>');
    // $usersList.empty();
    console.log("Submitted")
  });
};

const deleteItem = function (cart_id) {
  console.log('made it to delete function')
  console.log(cart_id,'cart id')
  $.ajax({
    method: 'POST',
    url: '/api/delete',
    data: {cart_id}
  })
  .done((response) => {
    console.log("Deleted Item")
  });
}




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
        <div id="cart-categories">

        <div class="cart-item">
        <img src="${checkout.img}"  width="75" height="75">
        </div>

        <div class="cart-item">
        <p>${checkout.name}</p>
        </div>

        <div class="cart-item">
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
        </div>

        <div class="cart-item">
        <p>
        Price: $${(checkout.price / 100) * checkout.quantity}
        </p>
        </div>

        <div class="cart-item">
        <button class="btn btn-danger" type="submit" value="delete" onClick="deleteAndUpdate(${checkout.cart_id})" ><i class="fa-solid fa-trash"></i></button>
        </div>

        </div>

        `
      ).appendTo($checkoutList);
      sum += checkout.price * checkout.quantity;

    }
    let taxes = (sum / 100) * 0.13;
    let subtotal = sum / 100;
    let total = (subtotal + taxes).toFixed(2);

    $(`


    <div id="bottomCheckoutOutput">

    <div class="submit-button">
    <button class="button-52" onClick="sendText(${total});window.location.href='/confirmation'">Order Now</button>
    </div>

    <div>
    <p><strong>Subtotal:</strong> $${sum / 100}</p>
    <p><strong>Taxes:</strong> $${taxes.toFixed(2)}</p>
    <h4>Total: $${total}</h4>
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
}

$(document).ready(function () {
  renderCheckout();
});



