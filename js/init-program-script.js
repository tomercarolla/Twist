//Initial program links variables

let firstLink = document.getElementById("firstLink");
let secondLink = document.getElementById("secondLink");
let thirdLink = document.getElementById("thirdLink");
let fourLink = document.getElementById("fourLink");

window.addEventListener("scroll", function () {
//Initial program page - active links
    if (window.scrollY > 609 && window.scrollY < 1320) {
        firstLink.classList.add("active");
    } else {
        firstLink.classList.remove("active");
    }

    if (window.scrollY > 1319 && window.scrollY < 1819) {
        secondLink.classList.add("active");
    } else {
        secondLink.classList.remove("active");
    }

    if (window.scrollY > 1819 && window.scrollY < 1977) {
        thirdLink.classList.add("active");
    } else {
        thirdLink.classList.remove("active");
    }

    if (window.scrollY > 1977) {
        fourLink.classList.add("active");
    } else {
        fourLink.classList.remove("active");
    }
});
