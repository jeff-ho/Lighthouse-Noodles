
const changeQuantity = function (cart_id, quant) {
  $.ajax({
    method: 'POST',
    url: '/api/quantity',
    data: {cart_id, quant} // added -<<<<<< this
  })
  .done((response) => {
    // const $cartList = $('<div></div>');
    // $usersList.empty();
    console.log("Quantity changed")
  });
};


const submitOrder = function (cart_id, quant) {
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

$(document).ready(function () {
  const renderCheckout = function () {
    $.ajax({
      method: "GET",
      url: "/api/checkout",
    }).done((response) => {
      const $checkoutList = $(".items-checkout");
      $checkoutList.empty();
      let sum = 0;

      console.log(response.items)

      for (const checkout of response.items) {

        $(
          `
          <div id="cartCategories">
                <img src="${checkout.img}"  width="75" height="75">
                <span>${checkout.name}</span>
                <span>
                <select name="quantity" id="adjustItemQuantity" onChange="changeQuantity(${checkout.cart_id}, this.value)">
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
                </select>
                </span>
                <span>Price: $${(checkout.price / 100) * checkout.quantity}</span>
                <span>
                <input class="btn btn-primary" type="submit" value="delete">
                </span>
              </span>
          </div>`
        ).appendTo($checkoutList);

        sum += checkout.price;
      }
      let taxes = (sum / 100) * 0.13;
      let subtotal = sum / 100;
      $(`
      <span>Back to menu button</span>
      <span>
        <div>
            Subtotal: $${sum / 100}
            Taxes: $${taxes}
            Total: $${(subtotal + taxes).toFixed(2)}
        </div>
      </span>
        `).appendTo(`#subtotal`);
    });
  };
  renderCheckout();
});



