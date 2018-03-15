$(function () {

  $("form[name='contact']").validate({
    onkeyup: false,
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      message: "required",
      subject: "required",
    },

    errorPlacement: function (error, element) {
      element.val(error.text());
      element.on("input", !error.text());
    },

    messages: {
      name: "Please enter your name",
      subject: "Please enter a subject",
      message: "Please write a message",
      email: "Please enter a valid email address"
    },

    submitHandler: function (form) {
      form.submit();
      alert("Your message has been sent");
    }
  });
});