function goster() {
  var baslangic = parseInt(document.getElementById("baslangic").value);
  var sonuncu = parseInt(document.getElementById("sonuncu").value);
  var cütededler = [];
  var tekededler = [];

  for (var i = baslangic; i <= sonuncu; i++) {
    if (i % 2 === 0) {
      cütededler.push(i);
    } else {
      tekededler.push(i);
    }
  }

  document.getElementById("cütededler").innerHTML = "Cut ededler: " + cütededler.join(", ");
  document.getElementById("tekededler").innerHTML = "Tek Ededler: " + tekededler.join(", ");
}
