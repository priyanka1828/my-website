let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let result=document.querySelector(".qr");
let convert=document.querySelector("button");
let img=document.querySelector("img");
let text=document.querySelector("#text");
let empty=document.querySelector(".empty");

result.classList.add('hide');
empty.classList.add("hide");
convert.addEventListener("click",()=>{
	if(text.value!=""){
result.classList.remove('hide');
qr_code();
	}
	else{
    empty.classList.remove("hide");
	result.classList.add('hide');
	}
});

const qr_code=()=>{
	empty.classList.add("hide");
	img.src=`${url}${text.value}`;
}