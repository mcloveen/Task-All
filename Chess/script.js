document.addEventListener("DOMContentLoaded", function () {
    var chessboard = document.getElementById("chessboard");

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var square = document.createElement("div");
            square.classList.add("square");

            if ((i + j) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

            chessboard.appendChild(square);
        }
    }
});
