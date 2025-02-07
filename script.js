document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");

    let yesSize = 20; // Начальный размер кнопки "Да"
    let noSize = 20;  // Начальный размер кнопки "Нет"

    noButton.addEventListener("click", function () {
        if (noSize > 5) { // Чтобы кнопка не исчезла полностью
            noSize -= 2; // Уменьшаем кнопку "Нет"
            noButton.style.fontSize = noSize + "px";
        }
        yesSize += 5; // Увеличиваем кнопку "Да"
        yesButton.style.fontSize = yesSize + "px";
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <div style="text-align: center; font-size: 24px; color: white; margin-top: 20%;">
                <img src="venom_chibi.jpg" style="width: 200px;">
                <p>Теперь ты навсегда мой Веном💘</p>
            </div>
        `;
    });
});
