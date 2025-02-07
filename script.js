let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");

function yesClick() {
    document.body.innerHTML = `
        <h1>Теперь ты навсегда мой Веном💘</h1>
        <img src="venom_chibi.jpg" class="venom-chibi">
    `;
}

function noClick() {
    let noSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    // Уменьшение кнопки "Нет" (-10px)
    if (noSize > 10) {
        noButton.style.fontSize = (noSize - 10) + "px";
    } else {
        noButton.style.display = "none"; // Исчезает, если слишком маленькая
    }

    // Увеличение кнопки "Да" (+30px)
    yesButton.style.fontSize = (yesSize + 30) + "px";
}
