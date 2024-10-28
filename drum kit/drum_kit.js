//Created by Nonso Oranye in 2024

const KEYS = [
  { label: "a", name: "clap", src: "sounds/clap.wav" },
  { label: "s", name: "hihat", src: "sounds/hihat.wav" },
  { label: "d", name: "kick", src: "sounds/kick.wav" },
  { label: "f", name: "openhat", src: "sounds/openhat.wav" },
  { label: "g", name: "boom", src: "sounds/boom.wav" },
  { label: "h", name: "ride", src: "sounds/ride.wav" },
  { label: "j", name: "snare", src: "sounds/snare.wav" },
  { label: "k", name: "tom", src: "sounds/tom.wav" },
  { label: "l", name: "tink", src: "sounds/tink.wav" },
];

const platform = document.getElementById("platform");

for (let index = 0; index < KEYS.length; index++) {
  const key = KEYS[index];
  const { label, name } = key;

  platform.insertAdjacentHTML(
    "beforeend",
    `<li>
        <button id="Key${label.toUpperCase()}" onclick="handlePlay(event)">
            <span>${label}</span>
            <span>${name}</span>
        </button>
    </li>`
  );
}

function handlePlay(event) {
  event.target.classList.add("playing");
  setTimeout(() => {
    event.target.classList.remove("playing");
  }, 500);
}

window.addEventListener("keydown", function (e) {
  this.document.getElementById(`${e.code}`).click();
});
