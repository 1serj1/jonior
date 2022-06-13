"use strict"; // строгий станларт

 const addForm = document.addEventListener(`DOMContentLoaded`, () => {   // сначала, строим DOM -  потом исполнение
  
    const klientDB = [];  // массив под клиентов

    const addForm = document.querySelector("form.add");  // из какой формы HTML
    const btnnow = addForm.getElementsByTagName(`button`)[0]; //  назначил первую кнопку
    
     btnnow.addEventListener(`click`, () => { // назначаем слушатель события
      addForm.remove();  // очистить фому                
    }); 
    
    const btn = addForm.getElementsByTagName(`button`)[1];//  назначил вторую кнопку
    
    btn.addEventListener(`click`, (e) => { // назначаем слушатель события
        e.preventDefault();  // отменяем стандарт поведение браузера, чтоб не косячил
        const nameUser = addForm.querySelector(`.name__input`).value, // забираю значение из формы
              email = addForm.querySelector(`.email__input`).value,// забираю следующее значение из формы
              klient = `${nameUser + " post: "}${email}`; // объединяю  в общей переменной данные каждого пользователя
              // если что - потом сплайсом порезать по символу post:   на 2 части             
     if (klient.search (`@`) == -1 && klient != ` `){   // условие, если  нет @ (возвращ -1) И пустой строки (не заполнено).
// вызов самодельного алекта, стилизованного как надо ниже
            if( document.querySelector(`.user__alert`).style.display == "none"){// условие, если блок отключен
                document.querySelector(`.user__alert`).style.display = "";       // включить, лучше чем blok  -  меньше косяков
               }       
                     setTimeout(() => {    // задержка сообщения для юзера
                       document.querySelector(`.user__alert`).style.display = "none"; // после задержки - отключить
                     }, 2000);  //  через 1 секунду
               return; // зациклил, пока не наберут правильно, или не откажутся
 // конец алерта
        } else{

      klientDB.push(klient); // передача в массив данных
      addForm.remove();  // убираем форму из просмотра после внесенния данных

     }         
                      
   });  
  
  





});