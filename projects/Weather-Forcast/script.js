let apiKey="ed666ff85b074db3bae81431251402";
const link=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
let temp=document.querySelector("#temp");
let image=document.querySelector("#image");
let ShriRadha=document.querySelector("#kanha");
let feelsLike=document.querySelector("#feels");
let condition=document.querySelector("#condition");
let city=document.querySelector("#city");
let loc=document.querySelector("#loc");
let time=document.querySelector("#time");
let humidity=document.querySelector("#hvalue");
let windDir=document.querySelector("#dir");
let windDeg=document.querySelector("#deg");
let windSpeed=document.querySelector("#speed");
let getIt=document.querySelector("button");
let input=document.querySelector("input");
let lastUpdate=document.querySelector("b");

let weather=async()=>{
   const URL=`${link}${input.value}`;
   try{
   let urlAwait= await fetch(URL);
   let data=await urlAwait.json();
   console.log(data);
   temp.innerText=`${data.current.temp_c}°C / ${data.current.temp_f}°F `;
   feelsLike.innerText=`Feels like ${data.current.feelslike_c}°C / ${data.current.feelslike_f}°F`;
   condition.innerText=`${data.current.condition.text}`;
   city.innerText=`${data.location.name}`;
   loc.innerText=`${data.location.region}, ${data.location.country}`;
   time.innerText=`${data.location.tz_id}`;
   humidity.innerText=`${data.current.humidity}`;
   windDir.innerText=`${data.current.wind_dir}`;
   windDeg.innerText=`${data.current.wind_degree}°`;
   windSpeed.innerText=`${data.current.wind_kph}kph`;
   lastUpdate.innerText=`${data.location.localtime}`;
   img(data.current.condition.text);
   }catch(e){
      alert("city not found");
   }
}

const img = (cond) => {
   if (cond=="Overcast"|| cond=="Mist"||cond=="Wind"||cond=="Windy"||cond=="Neutral"||cond=="Tornado") {
     image.src = `./images/windy.png`; 
     ShriRadha.src=`./images/windrk.png`;
   }else if(cond=="Sunny"||cond=="Clear"){
     image.src = `./images/sun.png`; 
     ShriRadha.src=`./images/sunrk.jpg`;
   }else if(cond=="Light snow"||cond=="Snow"||cond=="Moderate snow"||cond=="Heavy snow"){
      image.src = `./images/rain snow.png`; 
      ShriRadha.src=`./images/rain snowrk.jpg`;
   }else if(cond=="Moderate rain"||cond=="Heavy rain"||cond=="Rain"||cond=="Light rain"){
      image.src = `./images/rain cloud.png`; 
      ShriRadha.src=`./images/rain cloudrk.png`;
   }else if(cond=="Cloudy"||cond=="Moderate cloud"||cond=="Heavy cloud"||cond=="Rain"||cond=="Tsunami"||cond=="Light cloud"){
      image.src = `./images/sun cloud.png`; 
      ShriRadha.src=`./images/sun cloudrk.png`;
   }else if(cond=="Thunderstrom"||cond=="Light"||cond=="Lightning"||cond=="Moderate thunderstrom"||cond=="Heavy thunderstrom"||cond=="Light thunderstrom"){
      image.src = `./images/lightning.png`; 
      ShriRadha.src=`./images/lightningrk.jpg`;
   }
   else {
      image.src = `./images/sun cloud.png`; 
      ShriRadha.src=`./images/rain cloudrk.png`;
   }
 };
 
 getIt.addEventListener("click", weather);
 input.value="Vrindavan";
 weather();