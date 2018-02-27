const button = document.getElementById("send");

function sendForm() {
  const request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:3000/userform', {form: { key: "value" }}, function (err, httpResponse, data) {
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
  });
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  sendForm();
});