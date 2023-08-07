const dbJsonUrl = './db.json'; 

const bannerImage = document.querySelector('.banner img');
const imageElements = document.querySelectorAll('.image img');
const selectButtons = document.querySelectorAll('.select-btn');
const formContainer = document.querySelector('.form-container');
const banner = document.querySelector('.banner');

let currentIndex = 0;

function loadImages(images) {
    bannerImage.src = images[0];

    imageElements.forEach((img, index) => {
        img.src = images[index + 1];
    });
}

function moveToNextImage(data) {
    currentIndex = (currentIndex + 1) % data.images.length;
    loadImages(data.images);
}

function showForm() {
    formContainer.style.display = 'block';
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your review/suggestion!');
}

selectButtons.forEach(button => button.addEventListener('click', showForm));
formContainer.addEventListener('submit', handleSubmit);

banner.addEventListener('click', () => moveToNextImage(currentIndex));

fetch(dbJsonUrl)
    .then(response => response.json())
    .then(data => {
        loadImages(data.images);
        banner.addEventListener('click', () => moveToNextImage(data));
    })
    .catch(error => console.error('Error fetching images:', error));