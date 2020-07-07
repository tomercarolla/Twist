//Initial program links variables

let firstLink = document.getElementById("firstLink");
let secondLink = document.getElementById("secondLink");
let thirdLink = document.getElementById("thirdLink");
let fourLink = document.getElementById("fourLink");

window.addEventListener("scroll", function () {
//Initial program page - active links
    if (window.scrollY > 609 && window.scrollY < 1369) {
        firstLink.classList.add("active");
    } else {
        firstLink.classList.remove("active");
    }

    if (window.scrollY > 1369 && window.scrollY < 1869) {
        secondLink.classList.add("active");
    } else {
        secondLink.classList.remove("active");
    }

    if (window.scrollY > 1869 && window.scrollY < 2182) {
        thirdLink.classList.add("active");
    } else {
        thirdLink.classList.remove("active");
    }

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        fourLink.classList.add("active");
    } else {
        fourLink.classList.remove("active");
    }
});
