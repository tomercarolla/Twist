//Open conversation links variables
let firstLink = document.getElementById("firstLink");
let secondLink = document.getElementById("secondLink");
let thirdLink = document.getElementById("thirdLink");

window.addEventListener("scroll", function () {
//Open conversation page - active links
    if (window.scrollY > 609 && window.scrollY < 959) {
        firstLink.classList.add("active");
    } else {
        firstLink.classList.remove("active");
    }

    if (window.scrollY > 959 && window.scrollY < 1448) {
        secondLink.classList.add("active");
    } else {
        secondLink.classList.remove("active");
    }

    if (window.scrollY > 1448) {
        thirdLink.classList.add("active");
    } else {
        thirdLink.classList.remove("active");
    }
});
