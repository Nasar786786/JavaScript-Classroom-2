//h1 = document.querySelector("h1");

//function changeColor(color , delay, nextColorChange) {
    //setTimeout( () => {
        //h1.style.color = color;
        //if(nextColorChange) nextColorChange();
    //}, delay);
//}

//changeColor("red", 1000, () => {
    //changeColor ("orange", 1000, () => {
        //changeColor("green", 1000, () => {
            //changeColor("yellow", 1000, () => {
                //changeColor("blue", 1000);
           // });
       // });
    //});
//});


//function savetoDb(data, success, failure) {
    //let internetSpeed = Math.floor(Math.random() *10) +1;
    //if(internetSpeed > 4) {
        //success();
    //} else {
        //failure();
   // }
//}

//savetoDb(
    //"apna college", 
    //()=> {
    //console.log("success :your data was saved");
    //savetoDb(
        //"hello world",
       //  ()=> {
        //console.log("success2: data2 saved");
         // savetoDb("shradha", ()=>{
          //  console.log("success3: data saved");
          //}, ()=>{
           // console.log("failure3: weak connection");
          //}
         // );
         //},
     //() => {
        //console.log("failure2 : weak connection");
    //}
   // );
    
   // },
    //()=> {
        //console.log("failure :weak connection. data not saved");
//}
//);


function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if(internetSpeed >4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

  savetoDb("apna college")
  .then(() => {
    console.log("data1 saved.");
    return savetoDb("helloworld");
  })
    .then(() => {
        console.log("data2 saved");
        return savetoDb("shradha");
 })
 .then(() => {
    console.log("data3 saved");
 })
 .catch(() => {
    console.log("promise was rejected");
 });

