const URL="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";
console.log("Hare Krishna");
let country=document.querySelectorAll(".country select");
let btn=document.querySelector("button");
let text=document.querySelector(".text");
let inputCurr=document.querySelector("input");
let fromC=document.querySelectorAll("from select");
let toC=document.querySelectorAll("to select");

for (let select of country){
  //accessing codes.js
    for(codeCur in countryList){
      let newOption=document.createElement("option");
      newOption.innerText=codeCur;
      newOption.value=codeCur;
      if(select.name==="from"&&codeCur==="USD"){
        newOption.selected="selected";
        fromC=codeCur;
      }
      if(select.name==="to"&&codeCur==="INR"){
        newOption.selected="selected";
        toC=codeCur;
      }
      select.append(newOption); //it adds newOption to the select tag 
    }
    select.addEventListener("change",(evt)=>{
    changeCountryF(evt.target);
    });
}

//changing flag
const changeCountryF=(element)=>{
  let codeCon=element.value;
  console.log("codeCon = ",codeCon);
  let codeCountry=countryList[codeCon];
  console.log("codeCountry = ",codeCountry);
  link=`https://flagsapi.com/${codeCountry}/flat/64.png`;
  let img=element.parentElement.querySelector("img"); //if pehle hi define kiya toh nhi chalega yeh link wala option
  img.src=link;
  if(element.name=="from"){
    fromC=codeCon;
    console.log("from: ",fromC);
  }
  else{
    toC=codeCon;
    console.log("to: ",toC);
  }
};

//conversion of money
const getExchange=async(from,to)=>{
  let newLink=`${URL}${from}_${to}.json`;
  let response=await fetch(newLink);
  let readableResp=await response.json();
  console.log(readableResp);
  let changeCur=readableResp.rate; //converter to different currency
  console.log(changeCur); //reciprocal of change
  let changeCurrency=(1/changeCur);
  console.log(changeCurrency);
  if(inputCurr.value<0){
    inputCurr.value=1;
  }
  let finalAmt=(changeCurrency*inputCurr.value).toFixed(4);
  console.log(finalAmt);
  displayRes(inputCurr.value,finalAmt,from,to);
};

//to display result in web
const displayRes=(inAmt,outAmt,from,to)=>{
  text.innerText=`${inAmt} ${from} = ${outAmt} ${to}`;
}


btn.addEventListener("click",()=>{
  getExchange(fromC,toC);
})


window.addEventListener("load",()=>{
  getExchange(fromC,toC);
  })
