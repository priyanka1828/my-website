let elements=document.querySelectorAll(".element");
let data=document.querySelector(".data");
let answer=document.querySelector(".answer");
let clear=()=>{
    data.innerText=""; 
}
let calculation=(equation)=>{
const result=eval(equation);
data.innerText=result;
};
for(let element of elements){
element.addEventListener("click",()=>{
if(element.innerText=="AC"){
    clear();
}
else if(element.innerText!="="){
if(element.innerText=="+/-"){     
    data.innerText=eval(-1*(data.innerText));
}else{
data.innerText=data.innerText+element.innerText;
}}
else{
    calculation(data.innerText);
}
});
}
