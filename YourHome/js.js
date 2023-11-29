const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImageEl.style.backgroundSize = 120 - window.pageYOffset / 12 + "%";
}

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger , .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});