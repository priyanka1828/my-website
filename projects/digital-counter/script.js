rounds=document.querySelector(".round");
beads=document.querySelector(".beads");
btn=document.querySelector("#coun");
bg=document.querySelector(".hareKrsna");
let audio = document.getElementById("voiceNote");
let audChange=document.querySelector("#change");
let record=document.querySelector(".record");

panchtatva();
btn.addEventListener("click",()=>{
    console.log("hare krishna");
	if(beads.innerText==108){
		panchtatva();
		beads.innerText=0;
        rounds.innerText=parseInt(rounds.innerText)+1;
	}
	else{
		beads.innerText=parseInt(beads.innerText)+1;
		mahamantra();
	}
	audio.load();
});

function panchtatva(){
        
bg.style.backgroundImage="url(https://pbs.twimg.com/media/E_pG-drVgAAB13V.jpg:large)";
        bg.style.backgroundSize="cover";
        bg.style.backgroundPosition = "center 90%";        audChange.src="./srilaPrabhupad_srikrsnacaitanya.mp4";
		record.classList.add("sumeru");
}

function mahamantra(){
        audChange.src="./srilaPrabhupad_harekrsna.mp4";
        bg.style.backgroundImage="url(https://madhurikunj.com/wp-content/uploads/2022/07/chant-the-holy-name.jpg)";
        bg.style.backgroundSize="cover";
        bg.style.backgroundPosition = "center 0%";
		record.classList.remove("sumeru");
}


