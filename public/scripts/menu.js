$(document).ready(function () {



  const appetizers = function() {
    $.ajax({
      method: 'GET',
      url: '/api/menu/app'
    })
    .done((response) => {
      const $appetizerList = $('#appetizer-container');
      $appetizerList.empty();

      for(const appetizer of response.items) {
        $(`<img src=${appetizer.img_url} class="item-image">`).appendTo($appetizerList);
        $(`<i class="fa-solid fa-cart-plus"></i>`).appendTo($appetizerList);
        $(`<h4 class="appetizer-name">`).text(appetizer.name).appendTo($appetizerList);
        //$(`<p class="appetizer-description">`).text(appetizer.description).appendTo($appetizerList);
        $(`<p class="appetizer-price">`).text(`Item Price: $${appetizer.price/100}`).appendTo($appetizerList);
      }
    });
  }
  appetizers();

  const noodles = function() {
    $.ajax({
      method: 'GET',
      url: '/api/menu/noodle'
    })
    .done((response) => {
      const $noodleList = $('#noodle-container');
      $noodleList.empty();

      for(const noodle of response.items) {
        $(
          `
          <div class="item">
          <img src=${noodle.img_url} class="item-image"">
          <i class="fa-solid fa-cart-plus"></i>
          <h4>${noodle.name}</h4>
          <p>Item Price: $${(noodle.price)/100}</p>
          </div>
          `
        ).appendTo($noodleList);
        // $(`<img src=${noodle.img_url} class="item-image">`).appendTo($noodleList);
        // $(`<i class="fa-solid fa-cart-plus"></i>`).appendTo($noodleList);
        // $(`<h4 class="noodle-name">`).text(noodle.name).appendTo($noodleList);
        // //$(`<p class="noodle-description">`).text(noodle.description).appendTo($noodleList);
        // $(`<p class="noodle-price">`).text(`Item Price: $${(noodle.price)/100}`).appendTo($noodleList);
      }
    });
  }
  noodles();

  const snacks = function() {
    $.ajax({
      method: 'GET',
      url: '/api/menu/snack'
    })
    .done((response) => {
      const $snackList = $('#snack-container');
      $snackList.empty();

      for(const snack of response.items) {
        $(`<img src=${snack.img_url} class="item-image">`).appendTo($snackList);
        $(`<i class="fa-solid fa-cart-plus"></i>`).appendTo($snackList);
        $(`<h4 class="snack-name">`).text(snack.name).appendTo($snackList);
        //$(`<p class="snack-description">`).text(snack.description).appendTo($snackList);
        $(`<p class="snack-price">`).text(`Item Price: $${(snack.price)/100}`).appendTo($snackList);
      }
    });
  }
  snacks();

  const drinks = function() {
    $.ajax({
      method: 'GET',
      url: '/api/menu/drink'
    })
    .done((response) => {
      const $drinkList = $('#drink-container');
      $drinkList.empty();

      for(const drink of response.items) {
        $(`<img src=${drink.img_url} class="item-image">`).appendTo($drinkList);
        $(`<i class="fa-solid fa-cart-plus"></i>`).appendTo($drinkList);
        $(`<h4 class="drink-name">`).text(drink.name).appendTo($drinkList);
        //$(`<p class="drink-description">`).text(drink.description).appendTo($drinkList);
        $(`<p class="drink-price">`).text(`Item Price: $${(drink.price)/100}`).appendTo($drinkList);
      }
    console.log(response.items)
    });
  }
  drinks();

})











