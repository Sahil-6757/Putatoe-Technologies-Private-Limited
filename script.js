let voice = document.getElementById("voice");
let serach = document.getElementById("serach");
voice.addEventListener("click", (e) => {
  alert("Your voice recognition is started");
  serach.value = "";
  let recognition = new webkitSpeechRecognition();

  recognition.lang = "en-GB";
  recognition.onresult = function (e) {
    serach.value = e.results[0][0].transcript;
  };
  recognition.start();
});


let nav= document.getElementById('nav');
let carousel = document.getElementById('carousel')
window.onscroll = function(){
  if(window.pageYOffset >= carousel.offsetTop){
    nav.classList.add('sticky')
    console.log("sticky class added")
  }
  else{
    nav.classList.remove('sticky')
    console.log("stickey class removed")
  }
}
