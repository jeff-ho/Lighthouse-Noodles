$(document).ready(function () {
      $.ajax({
        method: 'GET',
        url: '/api/menu'
      })
      .done((response) => {
      //   const $usersList = $('#menuItemList');
      //   $usersList.empty();

      //   for(const user of response.users) {
      //     $(`<li class="user">`).text(user.name).appendTo($usersList);
      //   }
      console.log(response.items)
      });
})











