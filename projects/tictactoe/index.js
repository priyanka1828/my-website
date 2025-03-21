let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector(".new-game");
let boxes=document.querySelectorAll(".boxes");
let msgcontainer=document.querySelector(".msg-container");
let trueO=true;
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset=()=>{
  trueO=true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  console.log("button is clicked");
  if(trueO){
    trueO=false;
    box.innerText="O";
  }else{
    trueO=true;
    box.innerText="X";
  }
box.disabled=true;
checkwinner();
  }); 
});
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enableboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const winneris=(Win)=>{
  console.log(`Congratulations! Winner is ${Win}`);
  let p=document.querySelector("p");
  p.innerText=`Winner is ${Win}!`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}
const checkwinner=()=>{
  for(let pattern of winner){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
    if(pos1===pos2&&pos2===pos3){
      winneris(pos1);
    }
  }
}
};

newgamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);