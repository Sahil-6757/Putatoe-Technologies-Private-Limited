let voice = document.getElementById("voice");
let serach = document.getElementById('serach');
voice.addEventListener("click", (e) => {

  let recognition = new webkitSpeechRecognition();

  recognition.lang = "en-GB";
  recognition.onresult = function (e){
  
    serach.value = e.results[0][0].transcript;
  }
recognition.start();

});
