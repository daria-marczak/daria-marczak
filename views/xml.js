(function () {
  $('#contact').on('submit', function (e) {

    $.ajax({
      type: 'post',
      url: 'https://jumprock.co/mail/marczdaria',
      data: $('#contact').serialize(),
      success: function () {
        alert("Email has been sent!");
      }
    });
    e.preventDefault();
  });
});