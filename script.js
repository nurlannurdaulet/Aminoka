document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const resultDiv = document.getElementById("result");

    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - noButton.clientWidth);
        let y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function() {
        document.querySelector(".buttons").style.display = "none";
        resultDiv.classList.remove("hidden");
    });
});
