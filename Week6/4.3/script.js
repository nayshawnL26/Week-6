const images = [
    "image1.png.jpg",
    "image2.png.jpg",
    "image3.png.jpg",
    "image4.png.jpg",
    "image5.png.jpg"
];

let currentIndex = 0;

const slideshowImage = document.getElementById("slideshowImage");
const imageCounter = document.getElementById("imageCounter");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

function showImage() {
    slideshowImage.src = images[currentIndex];
    slideshowImage.alt = `Slideshow image ${currentIndex + 1}`;
    imageCounter.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}

nextButton.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

previousButton.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

showImage();
