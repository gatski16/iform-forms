"use strict"

const body = document.querySelector("body");


const changeItemBox = document.querySelector(".summary__change");
const changeDeliveryBox = document.querySelector(".shipping__change");
const changePaymentBox = document.querySelector(".payment__change");
const shippingSaved = document.querySelector(".shipping__saved");
const savedCard = document.querySelector(".payment__methods--savedCard");
const paymentHidden = document.querySelector(".payment__hidden");
const exp = document.querySelector(".exp");

const changeItemBtn = document.querySelector(".changeItem");
const changeDeliveryBtn = document.querySelector(".changeDelivery");
const changePaymentBtn = document.querySelector(".changePayment");

const placeOrderBtn = document.querySelector(".placeOrderBtn");
placeOrderBtn.disabled = true;

let paymentMethodsLabel = document.querySelectorAll(".payment__methods--options label");
let paymentMethodsInput = document.querySelectorAll(".payment__methods--options input");
let i;

paymentMethodsInput.forEach(e => {
    e.addEventListener("click", e => {
        changePaymentMethod(e);
    })
});

changeItemBtn.addEventListener("click", changeItem);
changeDeliveryBtn.addEventListener("click", changeDelivery);
changePaymentBtn.addEventListener("click", changePayment);

document.querySelector(".changeItemUpdate").addEventListener("click", changeItemUpdate);




function changeItem() {
    changeItemBox.classList.add('visible');
    changeItemBtn.style.visibility = "hidden";
}

function changeItemUpdate() {
    changeItemBox.classList.remove('visible');
    changeItemBtn.style.visibility = "visible";
}

function changeDelivery() {
    changeDeliveryBox.classList.add('visible');
    document.querySelector(".shipping__saved").style.display = "none";
    document.querySelector(".payment").classList.remove('active');
    document.querySelector(".changeDeliveryUpdate").textContent = "Update address";

}

function changeDeliveryUpdate() {
    /*  if(document.querySelector("form").validity.typeMismatch){ */
    changeDeliveryBox.classList.remove('visible');
    shippingSaved.style.display = "grid";
    document.querySelector(".shipping__saved--address--first").textContent = document.getElementById("street").value;
    document.querySelector(".shipping__saved--address--second").textContent = document.getElementById("zip").value + ", " + document.getElementById("city").value;
    document.querySelector(".payment").classList.add('active');
    document.querySelector("#shipping").scrollIntoView()
}

function changePayment() {
    changePaymentBox.classList.add('visible');
    savedCard.classList.add('hidden');
}

function changePaymentUpdate() {
    changePaymentBox.classList.remove('visible');
    savedCard.classList.remove('hidden');
    placeOrderBtn.classList.remove('disabledBtn');
    placeOrderBtn.disabled = false;
    document.querySelector(".total").scrollIntoView()
}

function changePaymentMethod(e) {

    if (paymentMethodsInput[0].checked) {
        paymentHidden.classList.add('visible');
        placeOrderBtn.classList.add('disabledBtn');
    } else {
        paymentHidden.classList.remove('visible');
        placeOrderBtn.classList.remove('disabledBtn');
        placeOrderBtn.disabled = true;

    }


    for (i = 0; i < 4; i++) {
        if (paymentMethodsInput[i].checked) {
            paymentMethodsLabel[i].firstElementChild.src = "img/" + paymentMethodsLabel[i].firstElementChild.alt + "-white.png";
        } else {
            paymentMethodsLabel[i].firstElementChild.src = "img/" + paymentMethodsLabel[i].firstElementChild.alt + "-black.png";
        }
    }


}

function addSlash() {
    if (exp.value.length == 2) {
        exp.value = exp.value + "/";
    }
}