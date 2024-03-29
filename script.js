const Content = [
    "Python is a versatile and user-friendly programming language. It's known for its simplicity and readability, making it an excellent choice for beginners. Python's extensive library support and strong community make it a top choice for web development, data analysis, and automation.","JavaScript is the language of the web. It's used for creating interactive websites and web applications. JavaScript's ability to run in browsers makes it essential for front-end development. With Node.js, it can also be used for server-side scripting.","Java is a powerful, object-oriented language used in various domains, including mobile app development, web applications, and enterprise systems. Its 'write once, run anywhere' capability and strong typing make it a reliable choice.","C++ is a high-performance language widely used in game development, embedded systems, and scientific computing. It combines the features of C with object-oriented programming, making it a versatile language for performance-critical applications."
  ];
  let time=59;
  let speed;  
  
  const TIMER = document.getElementById('timer');
  const container = document.getElementById('container');
  const randomIndex = Math.floor(Math.random() * Content.length);
  const text = Content[randomIndex];
  
  function initial() {
    let word = '';
    for (let i = 0; i < text.length; i++) {
      word += `<span>${text[i]}</span>`;
    }
    container.innerHTML = word;
  }
  
  initial();
  
  let sp = 0;
  let start = false;
  const spans = document.querySelectorAll('#container > span');
  window.addEventListener("keypress", function (ev) {
    spans[sp].classList.remove("back");
    if (time != 0) {
      if (!start) {
        speed = setInterval(runTime, 1000);
        start = true;
      }
      if (ev.key === text[sp]) {
        spans[sp].classList.remove("wrong");
        spans[sp].classList.add("correct");
      }
      if(ev.key != " " && text[sp] == " "){
        console.log(ev.key +  ", " + text[sp])
        spans[sp].classList.add("forspace");
      }
      if (ev.key != text[sp]){
        spans[sp].classList.add("wrong");
        spans[sp].classList.remove("correct");
      }
  
      sp++;
    }
  });
  
  window.addEventListener("keydown", function (ev) {
    if (ev.key === "Backspace" && sp > 0) {
      sp--;
      spans[sp].classList.add("back");
      spans[sp].classList.remove("forspace");
    }
  });
  function runTime(){
    time--;
    TIMER.textContent=time;
    if(time==0){
      clearInterval(speed);
      score=Math.round(sp/5);
      TIMER.textContent="Your time is up!"
     container.textContent="";
     container.textContent="Your typing speed is " + score + " per minute.";
     container.classList.add("forzero");
    }
    if(time>15 && time<60){
      TIMER.style.color="white";
    }
    else{
      TIMER.style.color="red";
    }
  }
  
  function restart(){
    location.reload();
  }