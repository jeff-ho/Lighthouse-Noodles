$(document).ready(function () {
  const renderCheckout = function () {
    $.ajax({
      method: "GET",
      url: "/api/checkout",
    }).done((response) => {
      console.log(response, "response");
      const $checkoutList = $(".items-checkout");
      $checkoutList.empty();
      let sum = 0;
      let userName = response.items[0];
      console.log(userName);

      for (const checkout of response.items) {
        $(
          `
            <div class="item">
            <h4>${checkout.name}</h4>
            <div><span>Quantity: ${checkout.quantity}</span>
            <span>Price: $${(checkout.price / 100) * checkout.quantity}</span>
             </div>
            </div>
            `
        ).appendTo($checkoutList);
        sum += checkout.price;
      }
      let taxes = (sum / 100) * 0.13;
      let subtotal = sum / 100;
      $(`<p>Subtotal: $${sum / 100}</p>
        <p>Taxes: $${taxes}</p>
        <p>Total: $${(subtotal + taxes).toFixed(2)}</p>`).appendTo(`#subtotal`);
    });
  };
  renderCheckout();
});
