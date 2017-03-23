function myFunction() {
    var x = document.getElementById("nav_ul");
    if (x.className === "nav_ul") {
        x.className += " responsive";
    } else {
        x.className = "nav_ul";
    }
}