$("#submit-button").on('click', function() {
  $.ajax({
    method: 'POST',
    url: '/api/twilio',
    data:{}
  })
  .done((response) => {
    console.log("Added to cart")
  });
})
