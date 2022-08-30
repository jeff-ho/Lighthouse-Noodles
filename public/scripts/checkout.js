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

{/* <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select> */}
           // onClick="extractId(this.id)"
      for (const checkout of response.items) {
        $(
          `
          <div id="cartCategories">

                <img src="${checkout.img}"  width="75" height="75">

                <span>${checkout.name}</span>

                <span>
                <select name="quantity" id="adjustItemQuantity" onChange="console.log(this.value)">
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
          </div>



            `
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
      <input class="btn btn-primary" type="submit" value="CHECKOUT">

        `).appendTo(`#subtotal`);
    });
  };
  renderCheckout();
});










// const renderCheckout = function () {
//   $.ajax({
//     method: "GET",
//     url: "/api/checkout",
//   }).done((response) => {
//     console.log(response, "response");
//     const $checkoutList = $(".items-checkout");
//     $checkoutList.empty();
//     let sum = 0;
//     let userName = response.items[0];
//     console.log(userName);

//     for (const checkout of response.items) {
//       $(
//         `
//           <div class="item">
//           <h4>${checkout.name}</h4>
//           <div><span>Quantity: ${checkout.quantity}</span>
//           <span>Price: $${(checkout.price / 100) * checkout.quantity}</span>
//            </div>
//           </div>
//           `
//       ).appendTo($checkoutList);
//       sum += checkout.price;
//     }
//     let taxes = (sum / 100) * 0.13;
//     let subtotal = sum / 100;
//     $(`<p>Subtotal: $${sum / 100}</p>
//       <p>Taxes: $${taxes}</p>
//       <p>Total: $${(subtotal + taxes).toFixed(2)}</p>`).appendTo(`#subtotal`);
//   });
// };
