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

    if (window.scrollY > 1049 && window.scrollY < 1486) {
        secondLink.classList.add("active");
    } else {
        secondLink.classList.remove("active");
    }

    if (window.scrollY > 1486 && window.scrollY < 1726) {
        thirdLink.classList.add("active");
    } else {
        thirdLink.classList.remove("active");
    }

    if (window.scrollY > 1726) {
        fourLink.classList.add("active");
    } else {
        fourLink.classList.remove("active");
    }
});
