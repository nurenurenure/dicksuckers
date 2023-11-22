"use strict"
 let ideas = ["Тарелки для супа с дыркой вместо дна", 
 "Вязанные висельные петли", 
 "Сапоги из хлеба",
"Гробы из сахарной ваты",
"Клуб фанатов прописей", "Создание веб-сайтов", "Создание композиций для барабанов"];

 function millieRandom(array){
  let iosiphresult = array[Math.floor(Math.random()*array.length)];
  document.getElementById("result").innerHTML = "WHAT A COOL IDEA!: " + iosiphresult;
 }
