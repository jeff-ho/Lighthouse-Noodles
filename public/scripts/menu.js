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
        $(
          `
          <div class="item">
          <img src=${appetizer.img_url} class="item-image"">
          <i class="fa-solid fa-cart-plus"></i>
          <h4>${appetizer.name}</h4>
          <p>Item Price: $${(appetizer.price)/100}</p>
          </div>
          `
        ).appendTo($appetizerList);
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
        $(
          `
          <div class="item">
          <img src=${snack.img_url} class="item-image"">
          <i class="fa-solid fa-cart-plus"></i>
          <h4>${snack.name}</h4>
          <p>Item Price: $${(snack.price)/100}</p>
          </div>
          `
        ).appendTo($snackList);
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
        $(
          `
          <div class="item">
          <img src=${drink.img_url} class="item-image"">
          <i class="fa-solid fa-cart-plus"></i>
          <h4>${drink.name}</h4>
          <p>Item Price: $${(drink.price)/100}</p>
          </div>
          `
        ).appendTo($drinkList);
      }
    console.log(response.items)
    });
  }
  drinks();

})











