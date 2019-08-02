 function print(msg) {
     document.getElementById("output").innerHTML = "Lenght is " + msg;
 }

 document.getElementById("btn").onclick = function () {
     print(document.getElementById('str').value.length);
 }