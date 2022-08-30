
//const addToOrder = require('../../db/queries/cart')

const extractId = function (click) {
  $.ajax({
    method: 'POST',
    url: '/api/menu/cart',
    data: {click} // added -<<<<<< this
  })
  .done((response) => {
    // const $cartList = $('<div></div>');
    // $usersList.empty();
    console.log("Added to cart")
  });
};

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
          <img src=${appetizer.img_url} class="item-image">
          <h4>${appetizer.name}</h4>
          <p>Price: $${(appetizer.price)/100}</p>
          <button id="${appetizer.id}" onClick="extractId(this.id)" class="btn"><i class="fa-solid fa-cart-plus"></i> Order Now</button>

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
          <img src=${noodle.img_url} class="item-image">
          <h4>${noodle.name}</h4>
          <p>Price: $${(noodle.price)/100}</p>
          <button id="${noodle.id}" onClick="extractId(this.id)" class="btn"><i class="fa-solid fa-cart-plus"></i> Order Now</button>
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
          <img src=${snack.img_url} class="item-image">
          <h5>${snack.name}</h5>
          <p>Price: $${(snack.price)/100} </p>
          <button id="${snack.id}" onClick="extractId(this.id)" class="btn"><i class="fa-solid fa-cart-plus"></i> Order Now</button>
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
          <img src=${drink.img_url} class="item-image">
          <h4>${drink.name}</h4>
          <p>Price: $${(drink.price)/100}</p>
          <button id="${drink.id}" onClick="extractId(this.id)" class="btn"><i class="fa-solid fa-cart-plus"></i> Order Now</button>
          </div>
          `
        ).appendTo($drinkList);
      }
    console.log(response.items)
    });
  }
  drinks();

})











