let btn = document.querySelectorAll("button");

   for (btn of btn) {
    btn.onclick = SayHello;
   }
 
function SayHello () {
    alert ("Hello");
}