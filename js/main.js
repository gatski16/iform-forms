"use strict"

const modal = document.querySelector(".modal-order");
const modalHeading = document.querySelector(".modal-order__top--heading");
const sizeModal = document.querySelector(".modal-order__sizing");
const numbersModal = document.querySelector(".modal-order__numbers");

const backBtn = document.querySelector(".modal-order__top--back");

document.querySelector(".modal-order__product--button").addEventListener("click", showNumbers);
document.querySelector(".modal-order__top--back").addEventListener("click", showSizing);
document.querySelector(".modal-order__top--close").addEventListener("click", closeModal);
document.querySelector(".orderBtn").addEventListener("click", openModal);


function showSizing() {
    modalHeading.textContent = "1. Choose size";
    numbersModal.style.transform = "translateX(100%)";
    sizeModal.style.transform = "translateX(0)";
    backBtn.style.visibility = "hidden";
}

function showNumbers() {
    modalHeading.textContent = "2. Choose bundle";
    numbersModal.style.transform = "translateX(0)";
    sizeModal.style.transform = "translateX(-100%)";
    backBtn.style.visibility = "visible";
}

function closeModal() {
    modal.style.transform = "translateX(100%)";
    modal.style.opacity = "0";
    document.querySelector(".body__hidden").style.display = "block";
}

function openModal() {
    modal.style.transform = "translateX(0)";
    modal.style.opacity = "1";
    document.querySelector(".body__hidden").style.display = "none";
}


