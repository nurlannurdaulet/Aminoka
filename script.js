let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");

function yesClick() {
    console.log("Нажата кнопка 'Да'");

    document.body.innerHTML = `
        <div class="result">
            <h1 class="big-text">Теперь ты навсегда мой Веном💘</h1>
            <img src="venom-chibi.jpg" class="full-screen" onerror="imageError()">
        </div>
    `;

    document.body.style.background = "none"; // Убираем фон
}

// Функция для проверки, загружается ли изображение
function imageError() {
    alert("Ошибка: Файл venom-chibi.jpg не найден!");
}

function noClick() {
    let noSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    if (noSize > 10) {
        noButton.style.fontSize = (noSize - 10) + "px";
    } else {
        noButton.style.display = "none";
    }

    yesButton.style.fontSize = (yesSize + 30) + "px";
}
