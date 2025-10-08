const  Api="576f7f76041e927dba0ea281d2a26497";

const input  = document.getElementById('input')
const btn = document.getElementById('btn')




async function  weather(city){
   
const  Response =  await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric`)
  
const  data=  await Response.json()


   if(data.weather[0].main==="Clear"){
    document.querySelector('.image').src='images/clear.png'
   }
   if(data.weather[0].main==="Clouds"){
    document.querySelector('.image').src='images/clouds.png'
   }
   if(data.weather[0].main==="Rain"){
    document.querySelector('.image').src='images/rain.png'
   }
   if(data.weather[0].main==="Snow"){
    document.querySelector('.image').src='images/snow.png'
   }
  
  document.querySelector('.location').innerHTML=data.name 
  document.querySelector('.weath').innerHTML=Math.round(data.main.temp) +'°C'
  document.querySelector('#humi').innerHTML=data.main.humidity +'%'
  document.querySelector('#wind').innerHTML=data.wind.speed +'km/h'
   
}


btn.addEventListener("click",e=>{
    weather(input.value)
})