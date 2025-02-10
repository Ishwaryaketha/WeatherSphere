const button=document.querySelector("button");
const weather = document.querySelector('.weather')
const ans=document.createElement('div');
ans.className='answer';
function temperature(obj){ 
    weather.appendChild(ans);
    if(ans.innerHTML){
        ans.innerHTML="";
    }
    ans.innerHTML=`Name: ${obj.location.name} <br>
    Temperature(celsius): ${obj.current.temp_c} <br>
    Temperature(fahrenhiet): ${obj.current.temp_f} <br>
    Condition:  ${obj.current.condition.text}
    `;
    weather.appendChild(answer);
}
button.addEventListener("click",(event)=>{
    const input=document.getElementById("searcher").value;
fetch(`http://api.weatherapi.com/v1/current.json?key=dd184d2acd4344bfb8b43603250402&q=${input}&aqi=yes`)
.then(response=>response.json())
.then(data=>{
    temperature(data);
    console.log(data);
})
.catch(error=>console.log("error"))
})
