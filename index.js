let boxall= document.querySelectorAll(".cell");

//console.log(boxall);
let chance0=true;

let winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new");
let reset=document.querySelector("#reset");
let top1=document.querySelector(".TOP");

for(let box of boxall){//let creates new reference for the box in each iteration.. without it after completion of addeventlistner.. box by default points to the last box

   box.addEventListener("click",function () {
    //console.log("box was clicked");
        //console.log(box);
        
         if(!box.innerText){
            if(chance0){
                box.innerText="0";
                chance0=false;
            }else{
                box.innerText="X";
                chance0=true;
            }
         }   
        checkWinner();
   });
}

const disable=()=>{
    for(let box of boxall){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxall){
        box.disabled=false;
    }
}
function checkWinner(){
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxall[pattern[0]],boxall[pattern[1]],boxall[pattern[2]]);
        let val1=boxall[pattern[0]].innerText;
        let val2=boxall[pattern[1]].innerText;
        let val3=boxall[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1 === val2 && val2 ===val3){
                if(chance0){
                  
                    msg.innerText=`Winner is ${val1}`;
                    msg.classList.remove("hide");
                    //setTimeout(msg1,1000)
                    disable();
                    top1.classList.remove("hide");
                    //console.log("")
                }
                else{
                   
                    msg.innerText=`Winner is ${val1}`;
                    msg.classList.remove("hide");
                    //setTimeout(msg2,500);
                    disable();
                    top1.classList.remove("hide");
                    //console.log("winner 0")
                }
            }
        }
    }

}

// function msg1(){
//     alert(`Match ends! Winner is "X". Play new game`)
// }
// function msg2(){
//     alert(`Match ends! Winner is "0".Play new game`)
// }

function newgame(){
    chance0=true;
    enable();
    msg.innerText="";
  
   
    for(let box of boxall){
        box.innerHTML="";
    }
    top1.classList.add("hide");
}