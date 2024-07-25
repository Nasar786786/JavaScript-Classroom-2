let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


btn.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

p.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "yello";
});

h1.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
});

h3.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
});