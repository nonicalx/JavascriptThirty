//Created by Nonso Oranye in 2024

const hr = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();

const hr_hand = document.getElementById("hr-hand");
const min_hand = document.getElementById("min-hand");
const sec_hand = document.getElementById("sec-hand");

let hr_deg = 0;
let min_deg = 0;
let sec_deg = 0;

if (hr === 12) {
  hr_deg = 0;
}

if (hr > 12) {
  hr_deg = (hr - 12) * 30;
} else {
  hr_deg = hr * 30;
}

min_deg = min * 6;
sec_deg = sec * 6;

hr_hand.style.transform = `rotate(${hr_deg}deg)`;
min_hand.style.transform = `rotate(${min_deg}deg)`;
sec_hand.style.transform = `rotate(${sec_deg}deg)`;
