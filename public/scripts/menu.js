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
      url: '/api/menu/main'
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
    console.log(response.items)
    });
  }
  noodles();

})











