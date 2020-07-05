function showPopover() {
    let popover = document.getElementById("creditPopover");

    if (popover.classList.contains("show")) {
        popover.classList.remove("show");
    } else {
        popover.classList.add("show");
    }
}
