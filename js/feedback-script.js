//Feedback links variables

let firstLink = document.getElementById("firstLink");
let secondLink = document.getElementById("secondLink");
let thirdLink = document.getElementById("thirdLink");
let fourLink = document.getElementById("fourLink");

window.addEventListener("scroll", function () {
//Feedback page - active links
    if (window.scrollY > 609 && window.scrollY < 1049) {
        firstLink.classList.add("active");
    } else {
        firstLink.classList.remove("active");
    }

    if (window.scrollY > 1049 && window.scrollY < 1496) {
        secondLink.classList.add("active");
    } else {
        secondLink.classList.remove("active");
    }

    if (window.scrollY > 1496 && window.scrollY < 1702) {
        thirdLink.classList.add("active");
    } else {
        thirdLink.classList.remove("active");
    }

    if (window.scrollY > 1702) {
        fourLink.classList.add("active");
    } else {
        fourLink.classList.remove("active");
    }
});
