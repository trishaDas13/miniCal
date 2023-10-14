let month = document.querySelector('.month');
let day = document.querySelector('.day');
let date = document.querySelector('.date');
let year = document.querySelector('.year');

let currentDate = new Date();

let monthArr = ["January", "February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];
let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

month.innerText = monthArr[currentDate.getMonth()];
day.innerText = dayArr[currentDate.getDay()];
date.innerText = currentDate.getDate();
year.innerText = currentDate.getFullYear();
