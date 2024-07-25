let btns = document.querySelectorAll("button");

   for (btn of btns) {
   // btn.onclick = SayHello;
   // btn.onclick = SayHello;

   //btn.addEventListener("click" , SayHello);
   //btn.addEventListener("click" , SayName);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    });

    }
 
function SayHello () {
    alert ("Hello");
}

function SayName() {
    alert("apna College");
}