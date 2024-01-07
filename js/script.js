
const API_key = '4d0acb5c587ea09e45d027229439b325';
const form = document.querySelector('#form');
const input = document.querySelector('.form__input');

form.onsubmit = submitHandler;
function submitHandler(e) {
   e.preventDefault();
   if (input.value.trim() === '') {
      console.log('Enter City name');
   } else {
      console.log(input.value.trim());
   }
   getGeo(input.value.trim())
}

//функция  поиска города
function getGeo(name) {
   const getUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_key}`
}
