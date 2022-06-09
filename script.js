"use strict";

document.addEventListener(`DOMContentLoaded`, () => { 

const userName = prompt("Как к Вам обращатся?",""); 
const userEmail = prompt("Введите Ваш  e mail","");
//  function pusto(){
//   if (userName) {  // если userName пустой, то фолс - цикл не пойдет - додумать, хоршая идея!
//       alert(userName);
// } else {
//     const userEmail = prompt("Введите Ваш  e mail","")
// }
//  };
 const klientDB = {

    klientName: userName,
    klientEmail: userEmail
}; 
console.log (klientDB);
});