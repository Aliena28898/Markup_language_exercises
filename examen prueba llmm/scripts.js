function hide() {
    var array = document.getElementsByName("info");

    if (array[0].style.display != "none") {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = "none";

        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = "block";

        }
    }
}