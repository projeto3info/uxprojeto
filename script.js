document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("matrix-text");
    const text = "Bem-vindo a nossa realidade.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    const images = document.querySelectorAll(".image");

    function showNextImage(index) {
        if (index < images.length) {
            images[index].style.display = "block";
            images[index].addEventListener("animationend", function () {
                showNextImage(index + 1);
            }, { once: true });
        }
    }


    showNextImage(0);

    const selectedImage = document.getElementById("selected-image");
    const imageLog = document.getElementById("log-list");

    images.forEach(function (image, i) {
        image.addEventListener("click", function () {
            const imageUrl = image.getAttribute("src");
            selectedImage.setAttribute("src", imageUrl);

            const listItem = document.createElement("li");
            listItem.textContent = `Imagem ${i + 1}: ${imageUrl}`;
            imageLog.appendChild(listItem);
        });
    });
});
