function yesClick() {
    document.body.innerHTML = `
        <div class="result">
            <img src="venom-chibi.jpg" class="full-screen" onerror="imageError()">
            <h1 class="big-text">Теперь ты навсегда мой Веном💘</h1>
        </div>
    `;

    document.body.style.background = "none"; // Убираем фон
}

function noClick() {
    let noButton = document.getElementById("no");
    let yesButton = document.getElementById("yes");

    let noSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    // Уменьшение кнопки "Нет"
    if (noSize > 10) {
        noButton.style.fontSize = (noSize - 10) + "px";
    } else {
        noButton.style.display = "none"; // Исчезает, если слишком маленькая
    }

    // Увеличение кнопки "Да"
    yesButton.style.fontSize = (yesSize + 30) + "px";
}
