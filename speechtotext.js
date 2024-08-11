var voice = document.getElementById("voice");
var stopButton = document.getElementById("stop");
var resultElement = document.getElementById("contleft");
var voicerepeat=document.querySelector(".voicerepeat");

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

voice.addEventListener("click", () => {
  recognition.start();
});
// stopButton.addEventListener("click", () => {
//   recognition.stop();
// });

recognition.addEventListener("result", (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  resultElement.textContent = result;
//   console.log(result)
});


voicerepeat.addEventListener("click",function(){
  recognition.start();
})