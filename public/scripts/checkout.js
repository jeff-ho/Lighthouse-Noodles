$(document).ready(function () {

    const renderCheckout = function() {
      $.ajax({
        method: 'GET',
        url: '/api/checkout'
      })
      .done((response) => {
        console.log(response, 'response')
        const $checkoutList = $('.items-checkout');
        $checkoutList.empty();
        let sum = 0;

        for(const checkout of response.items) {
          $(
            `
            <div class="item">
            <h4>${checkout.name}</h4>
            <div><span>Quantity: ${checkout.quantity}</span>
            <span>Price: $${(checkout.price)/100 * checkout.quantity}</span>
             </div>
            </div>
            `
          ).appendTo($checkoutList);
            sum+= checkout.price
        }
        $(`<p>Subtotal: $${sum/100}</p>`).appendTo(`#subtotal`)
      });
    }
    renderCheckout();

})
