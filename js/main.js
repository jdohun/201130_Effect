$("body").append("<div class='Box'></div>")
  .append("<div class='Time'></div>");
$(".Box").append("<div class='Image'></div>");

function Time(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let Clock = document.getElementsByClassName("Time")[0];
  Clock.innerHTML = `현재 한국 시간 ${hours} : ${minutes} : ${seconds}`;
}
Time();

let isOver = false;

$(".Box").on("mouseenter", ()=>{
  isOver = true;
});

$(".Box").on("mouseleave", ()=>{
  isOver = false;
});

let i = 20;
let size = true;

function Sizechage(){
  if(isOver == false && size == true){
    --i;
    setInterval(()=>{
      $(".Image").css({"width": `${i*3}px`, "height": `${i*3}px`});
    },1000);

    if(i==9){
      size = false;
    }
  }
  else if(isOver == false && size == false){
    ++i;
    setInterval(()=>{
      $(".Image").css({"width": `${i*3}px`, "height": `${i*3}px`});
    },1000);

    if(i==20){
      size = true;
    }
  }
}

setInterval(()=>{
  if(isOver == true){
    Time();
   }
},1000);

setInterval(()=>{
  if(isOver == false) {
    Sizechage();
  }
},80);

/*
$("body").append("<div class='Box blue'></div>");

let i = 0;
let isOver = false;
setInterval(()=>{
  if(isOver) {
    ++i
    $(".Box").css("margin-left", `${i * 3}px`);
  }
}, 60);

$(".Box").on("mouseenter", ()=>{
  isOver = true;
});


$(".Box").on("mouseleave", ()=>{
  isOver = false;
});
*/

/*
$("body").append("<div class='Row charge'></div>");
//let i = 0;

setInterval(()=>{

  ++i;
  $(".charge").css(`height`,`${i*3}px`);
  if(i == 160){
    i=0;
  }
}, 60);

/*
$("body").append("<div class='Row'></div>");

let i = 0;
for(i = 0; i < 10; ++i){
  $(".Row").append("<div class='cell'></div>");
}

let child = document.querySelector(".Row").firstElementChild;

for(i = 0; i < 10; ++i){

  if(i%2 == 0){
    child.classList.toggle(`red`);
    child = child.nextElementSibling;
  }
  else{
    child.classList.toggle(`blue`);
    child = child.nextElementSibling;
  }
}


setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(0);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 500);


setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(1);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 1000);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(2);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 1500);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(3);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 2000);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(4);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 2500);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(5);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 3000);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(6);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 3500);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(7);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 4000);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(8);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 4500);

setInterval(()=>{
  let cell = document.getElementsByClassName("cell").item(9);
  cell.classList.toggle("red");
  cell.classList.toggle("blue");
}, 5000);
*/
