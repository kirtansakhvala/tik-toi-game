
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let play0=true;
let newbutton=document.querySelector(".newbutton");
let msg=document.querySelector(".msg");
let messagecon=document.querySelector(".message-con");

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];


 boxes.forEach((box)=>{
   box.addEventListener("click",() =>{
    if(play0){
        box.innerText="x";
        box.disabled=true;
        play0=false;
    }else{
        box.innerText="o";
        box.disabled=true;
        play0="true";
    }
   checkwinner();
   });
 });
 const resetbut=()=>{
 play0=true;

 enablebox();
 messagecon.classList.add("hide");

   };

  
 
   const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
  const showwinner=(winner)=>{
    msg.innerText=  'congratulation, winner is'+ " " +winner;
    messagecon.classList.remove("hide");
    disablebox();

  }
     
 const checkwinner=()=>{
    for(let pattern of winpattern){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos2!="" ){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos2);
           showwinner(pos2);
           
        }
      }

    }
 }
             
           
         newbutton.addEventListener("click",resetbut);
         reset.addEventListener("click",resetbut);
    




 
