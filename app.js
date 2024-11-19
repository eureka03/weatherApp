
let locationElement = document.getElementById('locationElement');
let temperatureElement = document.getElementById('temperatureElement');
let descriptionElement =  document.getElementById('descriptionElement');
let search = document.getElementById('search');
let cityName = document.getElementById('cityName');

function fetchData(city){
   
   fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'?unitGroup=metric&include=current&key=RHJ6ZNXKWJJDBYL8ZJJYH8ARH&contentType=json')
   .then(response=>response.json())
   .then(data=> {
      locationElement.textContent = data.address;
      temperatureElement.textContent =  data.days[0].temp+'C';
      descriptionElement.textContent = data.days[0].description;
      console.log(data.days[0].description);
   }).catch(error => {
      console.error('Error fetching weather data:', error);
   })
} 

search.addEventListener('click',function(){
   let city = cityName.value;
   console.log('button clicked and city is '+city);
   fetchData(city);
});
   



