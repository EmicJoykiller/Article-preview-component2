document.addEventListener("DOMContentLoaded", function () {
    const shareBtn = document.querySelector(".share-btn");
    const shareOptions = document.querySelector(".share-options");

    shareBtn.addEventListener("click", function () {
        shareOptions.style.display = (shareOptions.style.display === "flex") ? "none" : "flex";
    });
});
