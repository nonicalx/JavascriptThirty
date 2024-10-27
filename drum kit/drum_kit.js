//Created by Nonso Oranye in 2024

const KEYS = [
  { label: "a", name: "clap" },
  { label: "s", name: "hihat" },
  { label: "d", name: "kick" },
  { label: "f", name: "openhat" },
  { label: "g", name: "boom" },
  { label: "h", name: "ride" },
  { label: "j", name: "snare" },
  { label: "k", name: "tom" },
  { label: "l", name: "tink" },
];

const platform = document.getElementById("platform");

for (let index = 0; index < KEYS.length; index++) {
  const key = KEYS[index];

  platform.insertAdjacentHTML(
    "beforeend",
    `<li>
        <button onclick="handlePlay(event)">
            <span>${key.label}</span>
            <span>${key.name}</span>
        </button>
    </li>`
  );
}

function handlePlay(event) {
  event.currentTarget.classList.add("playing");
  setTimeout(() => {}, 1000);
  event.currentTarget.classList.remove("playing");
}
