const kits = ["Snare","Kick","Crash","Tom"];

const containerEl = document.querySelector(".container");

kits.forEach(()=>{
    const btnEl  = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
})