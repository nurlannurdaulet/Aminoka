document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const question = document.getElementById("question");

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function () {
        question.innerHTML = "Я тебя тоже люблю ❤️";
        noButton.style.display = "none";
        yesButton.style.display = "none";
    });
});
