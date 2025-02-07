document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");

    let yesSize = 20; // Начальный размер кнопки "Да"
    let noSize = 20;  // Начальный размер кнопки "Нет"

    noButton.addEventListener("click", function () {
        noSize -= 2; // Уменьшаем кнопку "Нет"
        yesSize += 5; // Увеличиваем кнопку "Да"

        noButton.style.fontSize = noSize + "px";
        yesButton.style.fontSize = yesSize + "px";
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = `
            <div style="text-align: center; font-size: 24px; color: white;">
                <img src="venom_chibi.jpg" style="width: 200px;">
                <p>Теперь ты навсегда мой Веном💘</p>
            </div>
        `;
    });
});
