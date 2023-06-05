document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun avtomatik submit olmamasi ucun

  // yazdigimiz deyer
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // bos buraxildiqda xeberdarliq et 
  if (email === "" || password === "") {
    alert("Zehmet olmasa Email ve Password xanalarini doldurun");
  } else {
    // tesdiq 
    if (email === "seid_turan@hotmail.com" && password === "1234567") {
      alert("Girisiniz tesdiqlenmisdir!");
    } else {
      alert("E-mail veya şifreniz sehvdir!");
    }
  }
});
