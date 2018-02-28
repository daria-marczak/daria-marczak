$(function() {
  var form = $("#contact");
  var formMessages = $("#form-messages");
  var formData = $(form).serialize();
  $.ajax({
    type: "POST",
    url: "https://jumprock.co/mail/marczdaria",
    data: formData
  })
  .done(function(response) {
    $(formMessages).removeClass("error");
    $(formMessages).addClass("success");
    $(formMessages).text(response);

    $("name").val("");
    $("email").val("");
    $("message").val("");
  })
  .fail(function(data) {
    $(formMessages).removeClass("success");
    $(formMessages).addClass("error");

    if (data.reponseText !== "") {
      $(formMessages).text(data.responseText);
    } else {
      $(formMessages).text("Oops, something went wrong");
    }
  });
})

$(form).submit(function(event) {
  event.preventDefault();
})