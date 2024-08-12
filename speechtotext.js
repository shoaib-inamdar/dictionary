var voice = document.getElementById("voice");
var stopButton = document.getElementById("stop");
var voicetext = document.getElementById("voicetext");
var voicerepeat=document.querySelector(".voicerepeat");
var cross=document.querySelector("#cross")
var voiceok=document.querySelector(".voiceok");
var voicediv=document.querySelector(".voicediv");

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
  voicetext.textContent = result;
//   console.log(result)
});


voicerepeat.addEventListener("click",function(){
  recognition.start();
})

cross.addEventListener("click",function(){
  recognition.stop();
})

function voicesearch(){
  var searchword=voicetext.value;
  recognition.stop();
  getdata(searchword);
  voicetext.value='';
  voicediv.style.display="none";
}

voiceok.addEventListener("click",function(){
  voicesearch()
})

document.onkeydown=function(e){
  switch(e.keyCode){
      case 13:voicesearch();
  }
}