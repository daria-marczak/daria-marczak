var form = $("#contact");

$(function () {
  var formMessages = $("#form-messages");
  var formData = $(form).serialize();
  $.ajax({
      type: "POST",
      url: "http://localhost:3000/userform",
      form: { key: "value" }
    })
    .done(function (response) {
      console.log("sent");
    })
    .fail(function (data) {
      $(formMessages).removeClass("success");
      $(formMessages).addClass("error");

      if (data.reponseText !== "") {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text("Oops, something went wrong");
      }
    });
})

$(form).submit(function (event) {
  event.preventDefault();
});