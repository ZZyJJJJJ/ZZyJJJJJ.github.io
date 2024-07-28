let currentSlide = 1;
const totalSlides = 3; // 总共的轮播图片数量
let slideInterval;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel img');
    if (slideIndex < 1) {
        currentSlide = totalSlides;
    } else if (slideIndex > totalSlides) {
        currentSlide = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentSlide - 1].classList.add('active');
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

function startSlider() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 2000); // 切换间隔时间，单位为毫秒（这里设置为2秒）
}

function stopSlider() {
    clearInterval(slideInterval);
}

showSlide(currentSlide);
startSlider(); // 启动自动轮播

// 鼠标悬停在轮播区域时停止轮播
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    stopSlider();
});

// 鼠标离开轮播区域时恢复自动轮播
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    startSlider();
});