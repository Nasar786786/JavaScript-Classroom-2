let btn = document.querySelector("button");
console.dir(btn);

//btn.onclick = function () {
   // console.log("button was clicked");
//};

 
function SayHello () {
    alert ("Hello");
}
btn.onclick = SayHello;