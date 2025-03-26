let h1=document.querySelector(".upar");
let navHome=document.querySelector("#home");
let navContact=document.querySelector("#contact");
let RadheGovind=document.querySelector("#radhaGovind");
let navResume=document.querySelector("#resumes");
let navPort=document.querySelector("#portfolio");
let home=document.querySelector(".home");
let resume=document.querySelector(".resume");
let portfolio=document.querySelector(".portfolio");
let RadhaKrishna=document.querySelector(".radhaGovind");
let contact=document.querySelector(".contact");
let lowSection=document.querySelector(".lowSection");

resume.classList.add("hide");
portfolio.classList.add("hide");
contact.classList.add("hide");
RadhaKrishna.classList.add("hide");

navHome.addEventListener("click",()=>{
	h1.classList.remove("hide");
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	home.classList.remove("hide");
});

navResume.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	resume.classList.remove("hide");
});

let a=1;
navContact.addEventListener("click",()=>{
	a++;
	if(a%2==0){
		contact.classList.remove("hide");
	}
	else{
		contact.classList.add("hide");
	}
});

navPort.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(RadhaKrishna.class!="hide"){
		RadhaKrishna.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	portfolio.classList.remove("hide");
})

RadheGovind.addEventListener("click",()=>{
	if(h1.class!="hide"){
		h1.classList.add("hide");
	}
	if(home.class!="hide"){
		home.classList.add("hide");
	}
	if(resume.class!="hide"){
		resume.classList.add("hide");
	}
	if(portfolio.class!="hide"){
		portfolio.classList.add("hide");
	}
	if(contact.class!="hide"){
		contact.classList.add("hide");
	}
	RadhaKrishna.classList.remove("hide");
})

//toggle button ko lagi naya js
 
let upSection = document.querySelector(".upSection");
 
const toggleBtn = document.createElement('div');
toggleBtn.className = 'toggle-btn';
toggleBtn.innerHTML = '☰';
document.body.appendChild(toggleBtn);

const menu = document.createElement('div');
menu.className = 'sliding-menu';
menu.innerHTML = `
  <div class="menu-close">✕</div>
  <div class="menu-item" data-target="home">Home</div>
  <div class="menu-item" data-target="resumes">Resume</div>
  <div class="menu-item" data-target="RadhaKrishna">RadheGovind</div>
  <div class="menu-item" data-target="portfolio">Portfolio</div>
`;
document.body.appendChild(menu);

const style = document.createElement('style');
style.textContent = `
  body {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	width: 100%;
  }
  
  .toggle-btn {
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 1000;
	font-size: 24px;
	cursor: pointer;
	background: #211C84;
	color: white;
	width: 40px;
	height: 40px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .sliding-menu {
	position: fixed;
	top: 0;
	left: -100%;
	width: 40%;
	max-width: 300px;
	height: 100%;
	background: #211C84;
	z-index: 1001;
	transition: left 0.3s ease;
	box-shadow: 2px 0 5px rgba(0,0,0,0.2);
	padding-top: 60px;
	overflow-y: auto;
  }
  
  .sliding-menu.open {
	left: 0;
  }
  
  .menu-close {
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 20px;
	cursor: pointer;
	color: white;
  }
  
  .menu-item {
	color: white;
	padding: 15px 20px;
	font-size: 18px;
	cursor: pointer;
	border-bottom: 1px solid #3730A3;
  }
  
  .menu-item:hover {
	background: #3730A3;
  }
  
  @media (min-width: 768px) {
	.toggle-btn {
	  display: none;
	}
	
	.sliding-menu {
	  width: 40%;
	}
	
	.upSection {
	  display: block;
	}
  }
  
  @media (max-width: 767px) {
	.upSection {
	  display: none;
	}
	
	.toggle-btn {
	  display: flex;
	}
	
	.home {
	  flex-direction: column;
	  padding: 60px 10px !important;
	}
	
	.home > div {
	  width: 100% !important;
	  margin-bottom: 20px;
	  height: auto !important;
	}
	
	.resume #resume {
	  flex-direction: column;
	  width: 100% !important;
	}
	
	.resume .left, .resume .right {
	  width: 100% !important;
	  font-family:verdana;
	}
	
	.resume .inright {
	  width: 90% !important;
	}
	
	.portfolio .main div {
	  width: 100% !important;
	  padding: 10px !important;
	}
	
	.portfolio img {
	  width: 80% !important;
	  height: auto !important;
	}
	
	.RadhaKrishna .main {
	  margin: 10px !important;
	}
	
	.RadhaKrishna img {
	  width: 100% !important;
	}
  }
  
  @media (max-width: 480px) {
	.sliding-menu {
	  width: 100%;
	  max-width: none;
	}
	
	h1 {
	  font-size: 24px !important;
	}
  }
`;
document.head.appendChild(style);

toggleBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

document.querySelector('.menu-close').addEventListener('click', () => {
  menu.classList.remove('open');
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
	const target = item.getAttribute('data-target');
	handleNavigation(target);
	menu.classList.remove('open');
  });
});

function handleNavigation(target) {
  home.classList.add("hide");
  resume.classList.add("hide");
  portfolio.classList.add("hide");
  RadhaKrishna.classList.add("hide");
  
  h1.classList.remove("hide");
  
  switch(target) {
	case "home":
	  home.classList.remove("hide");
	  break;
	case "resumes":
	  h1.classList.add("hide");
	  resume.classList.remove("hide");
	  break;
	case "RadhaKrishna":
	  h1.classList.add("hide");
	  RadhaKrishna.classList.remove("hide");
	  break;
	case "portfolio":
	  h1.classList.add("hide");
	  portfolio.classList.remove("hide");
	  break;
  }
}

navHome.addEventListener("click", () => handleNavigation("home"));
navResume.addEventListener("click", () => handleNavigation("resumes"));
navPort.addEventListener("click", () => handleNavigation("portfolio"));
RadheGovind.addEventListener("click", () => handleNavigation("RadhaKrishna"));

function handleResize() {
  if (window.innerWidth < 768) {
	toggleBtn.style.display = 'flex';
	upSection.style.display = 'none';
  } else {
	toggleBtn.style.display = 'none';
	upSection.style.display = 'block';
  }
}

window.addEventListener('resize', handleResize);
handleResize();

document.head.insertAdjacentHTML('beforeend', `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`);