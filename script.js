"use strict";

document.addEventListener(`DOMContentLoaded`, () => { 

    const klientDB = []; 

    const addForm = document.querySelector("form.add"); 
    const btnnow = addForm.getElementsByTagName(`button`)[0];
    
     btnnow.addEventListener(`click`, () => { // назначаем слушатель события
      addForm.remove();  // что то сделать                  
    }); 
    
    const btn = addForm.getElementsByTagName(`button`)[1];
    
    btn.addEventListener(`click`, (e) => { // назначаем слушатель события
        e.preventDefault(); 
        const nameUser = addForm.querySelector(`.name__input`).value,
              email = addForm.querySelector(`.email__input`).value,
              klient = `${nameUser + " post: "}${email}`;
              klientDB.push(klient); 
     if (klient.search (`@`) == -1){
alert ( " Вы ошиблись! Повторите ввод.")
      return;
     } else{
      addForm.remove();  
     }       
    
    //  console.log (  klient.search (`@`));
      
                      
   });  
  
   console.log (  klientDB);
        
//  function pusto(){
//   if (userName) {  // если userName пустой, то фолс - цикл не пойдет - додумать, хоршая идея!
//       alert(userName);
// } else {
//     const userEmail = prompt("Введите Ваш  e mail","")
// }
//  };
//  const klientDB = {

//     klientName: prompt("Как к Вам обращатся?",""),
//     klientEmail: prompt("Введите Ваш  e mail","")
// }; 
// console.log (klientDB);
// const addForm = document.querySelector("form.add");
// const userName =addForm.querySelector("name__input");
// const userEmail = addForm.querySelector("eMail__input");


// // выбираем форму с HTML
       
        //    ev.preventDefault(); 
        //    let  name =  addForm.querySelector(`[name = "name"]`), // из формы брем  окошко ввода
        //         email =  addForm.querySelector(`[name = "email"]`);
        //         //   userName = name.value, 
        //         //   userEmail = eMail.value;         
        // //    console.log(userName);   
        // // //    const klientDB = {

        // //         userName: userEmail
        // //      };     
           

        //     }); 
        //     const klientDB = {
        //         name: name.value,
        //         email: email.value  
        //     }; 
        //     // 
        //     console.log(klientDB);  
//const  checkbox = addForm.querySelector(`[type="checkbox"]`);  // поставлена галочка в форме
//            addForm.addEventListener(`click`, (ev) => { // ev - событие
//              //submit - отправка формы
//              ev.preventDefault(); // отменили стандартное поведение браузера
//              let ulLast = name.value; // новое значение от юзера
//              //const favorit = checkbox.checked; // HTML свойство - тру - есть галочка, фолс - нет
             
//               if (ulLast) { // если ulLast - пустая строка, то цикл - фолс и ни чего не работает
//                 if (ulLast.length > 21) {  // если строка больше 21 
//                     ulLast = `${ulLast.substring(0, 22)}...`;  // обрезать ее и добавить ...
//                 }

//                 if(favorit){   // вывод с чекбокса  const favorit = checkbox.checked; 
//                    console.log("Добавляем любимый фильм");
//                 }

//                 movieDB.movies.push(ulLast); // вносим в массив
//                 //movieDB.movies.sort(); - было, выше объявлена фуия - используем:
//                 sortArr (movieDB.movies);  // вызов функц выражения выше
   
//                 createMovieList(movieDB.movies, movieList); // вызов функц выражения выше
   
//                 //addForm.reset(); // метод очистки (сброса) формы

//               }
            

//              ev.target.reset(); // метод очистки (сброса) формы  именно этого события

//            });


});