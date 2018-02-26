data = {from: from, to: to, subject: subject, text: html};
var request = new XMLHttpRequest();
request.open('POST', 'http://localhost:3000/userform', true);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.send(JSON.stringify(data));