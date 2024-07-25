//h1 = document.querySelector("h1");

//function changeColor(color , delay) {
    //return new Promise((resolve, reject) => {
        //setTimeout(()=> {
           // h1.style.color = color;
            //resolve("color changed!");
       // }, delay);
    //});
//}

//changeColor("red", 1000)
//.then(()=> {
    //console.log("red color was completed");
    //return changeColor("orange", 1000);
//})
//.then(()=> {

    //console.log("orange color was completed");
    //return changeColor("green", 1000);
//})
//.then(()=> {
    //console.log("green color was completed");
    //return changeColor("blue", 1000);
//})
//.then(()=> {
    //console.log("blue color was completed");
//});


async function greet() {
    throw "404 page not found";
    return "hello";
}

greet()
    .then((result)=> {
        console.log("promise was resolved");
        console.log("result was :", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err:", err);
    });

    let demo = async () => {
        return 5;
    };

