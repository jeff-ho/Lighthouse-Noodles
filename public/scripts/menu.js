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
        $(`<h4 class="appetizer-name">`).text(appetizer.name).appendTo($appetizerList);
        $(`<p class="appetizer-description">`).text(appetizer.description).appendTo($appetizerList);
        $(`<img src=${appetizer.img_url} class="item-image">`).appendTo($appetizerList);
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
        $(`<h4 class="noodle-name">`).text(noodle.name).appendTo($noodleList);
        $(`<p class="noodle-description">`).text(noodle.description).appendTo($noodleList);
        $(`<img src=${noodle.img_url} class="item-image">`).appendTo($noodleList);
        $(`<p class="noodle-price">`).text(`Item Price: $${(noodle.price)/100}`).appendTo($noodleList);

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
        $(`<h4 class="snack-name">`).text(snack.name).appendTo($snackList);
        $(`<p class="snack-description">`).text(snack.description).appendTo($snackList);
        $(`<img src=${snack.img_url} class="item-image">`).appendTo($snackList);
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
        $(`<h4 class="drink-name">`).text(drink.name).appendTo($drinkList);
        $(`<p class="drink-description">`).text(drink.description).appendTo($drinkList);
        $(`<img src=${drink.img_url} class="item-image">`).appendTo($drinkList);
        $(`<p class="drink-price">`).text(`Item Price: $${(drink.price)/100}`).appendTo($drinkList);

      }
    console.log(response.items)
    });
  }
  drinks();

})











