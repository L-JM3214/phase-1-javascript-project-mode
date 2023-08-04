
const imageUrls = {
    
};

const imageElements = document.querySelectorAll(".image img");
const selectButtons = document.querySelectorAll(".select-btn");
const formContainer = docuement.querySelector(".form-container");

let currentIndex = 0;

function fetchImages(){
    imageElements.forEach((img, index) => {
        img.src = imageUrls[index];
    });
}
function moveToNextImage(){
    currentIndex = (currentIndex + 1) % imageUrls.length;
    fetchImages();
}
function showForm(){
    formContainer.style.display = "block";
}
function handleSubmit(event){
    event.preventDefault();
    alert("Thank you for your review/suggetion!");
}
selectButtons.forEach((button) => {
    button.addEventListener("click",showForm);
});
formContainer.addEventListener("submit", handleSubmit);
fetchImages();
const banner = document.querySelector(".banner");
banner.addEventListener("click", moveToNextImage);