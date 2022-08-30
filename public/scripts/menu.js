
//const addToOrder = require('../../db/queries/cart')

const extractId = function (click) {
  console.log('here', click)
  $.ajax({
    method: 'POST',
    url: '/api/menu/cart',
    //data:{item_id:click, item_quantity:1}
  })
  .done((response) => {
    // const $cartList = $('<div></div>');
    // $usersList.empty();
    console.log(response,'fdsafadsfdsfdsafdsafdsa')
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
          <p>Item Price: $${(appetizer.price)/100} <i id="${appetizer.id}" onClick="extractId(this.id)"  class="fa-solid fa-cart-plus"></i></p>
          
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
          <p>Item Price: $${(noodle.price)/100} <i id="${noodle.id}" onClick="extractId(this.id)" class="fa-solid fa-cart-plus"></i></p>
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
          <h4>${snack.name}</h4>
          <p>Item Price: $${(snack.price)/100} <i id="${snack.id}" onClick="extractId(this.id)" class="fa-solid fa-cart-plus"></i></p>
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
          <p>Item Price: $${(drink.price)/100} <i id="${drink.id}" onClick="extractId(this.id)" class="fa-solid fa-cart-plus"></i></p>
          </div>
          `
        ).appendTo($drinkList);
      }
    console.log(response.items)
    });
  }
  drinks();

})











