
let numbers = document.querySelectorAll(".buts");
let ratePElement = document.querySelector(".rate-p");
let rateValue;

for (let number of numbers) {
    number.addEventListener("click", function () {
        rateValue = number.textContent;
        ratePElement.textContent = `You selected ${rateValue} out of 5`;
    });
};

document.querySelector(".submit").addEventListener(
    "click", function () {
        document.querySelector(".thank-you").style.display = "flex";
        document.querySelector(".rating").style.display = "none";
    }
);



