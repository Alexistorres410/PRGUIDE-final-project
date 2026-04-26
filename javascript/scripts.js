
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("btn-open");
const closeModalBtn = document.getElementById("btn-close");


function openModal() {
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};


openModalBtn.addEventListener("click", openModal);


function closeModal() {
 modal.classList.add("hidden");
 overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);