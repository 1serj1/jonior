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
  
  // ВАЖНО!!! Создание таймера. План:
// 1. Фия таймера
// 2. Фия считающая дедлайн
// 3. Фия обновления таймера


// 1. Фия таймера
let deadLine = `2022-06-27`; // создаем дату - точка отсчета
// формат страки в таком виде, ибо так выдает бэкенд, может приходить динамически с панели администратора 

//переназначение точки отсчета  
let  now = Date.parse(deadLine);  // перевод даты в миллисекунды

function getNeyDate (){
      if (now <= Date.parse(new Date())){
            let redeadLine = Date.parse(new Date()) + 1000*60*60*72;
                 deadLine = redeadLine;
        
      }
}
getNeyDate();

let chekData = new Date(deadLine); // перевод миллисекунд в дату

//фуя считающая разницу мезду дедлайном и текущим  временем 
// 2. Фия считающая дедлайн
function getTimerRemainihg(endtime) {
       const t = Date.parse(endtime) - Date.parse(new Date()),
       // преобразуем в миллисекунды и получаем разницу
             days = Math.floor (t/(1000*60*60*24)), 
       // Math.floor - округлили, t  - всего милисекунд, 1000*60*60*24 - сколько милисекунд в сутках
             hours =  Math.floor ((t/(1000*60*60)%24)),
       // также , но в часах, %24 - возвращает остаток от суток, что бы не было 67 часов в счетчике 
             minutes =  Math.floor ((t/1000/60)%60),
             seconds =  Math.floor ((t/1000)%60);

             // т.к. переменные внутри фуии, для их использования возвращаем объект
       return {
              "total": t,
              "days":  days,
              "hours": hours,
              "minutes": minutes,
              "seconds": seconds 
       };
}

// если число из одной цифры - приписываем  0 вначале
function getZero (num) {
         if (num >= 0 && num < 10) { 
// num >= 0 проверка на отриц. число - на всякий случай
              return `0${num}`;
// если цифра одна - дописываем 0 
         } else {
              return num;
// если нет - пишем ее
         }

}



// 3. Фия обновления таймера
function setClock(selector, endtime) {
       const timer = document.querySelector(selector), // с каким HTML
              days = document.querySelector(`#days`), 
              hours = document.querySelector(`#hours`), 
              minutes = document.querySelector(`#minutes`), 
              seconds = document.querySelector(`#seconds`),
              timyInterval = setInterval(updateClouck,1000); // перезапуск фии updateClouck каждую секунду

              updateClouck(); // запуск с открытия - что бы не моргало

       function updateClouck(){
                 const t = getTimerRemainihg(endtime); // задействуем фую выше, используя ее итоговый объект
        
                 // первоначальный вариант, без дописывания нуля 
              //    days.innerHTML = t.days;
              //    hours.innerHTML = t.hours;
              //    minutes.innerHTML = t. minutes;
              //    seconds.innerHTML = t.seconds;


              // с дописанным нулем 
                 days.innerHTML = getZero(t.days);
                 hours.innerHTML = getZero(t.hours);
                 minutes.innerHTML = getZero(t. minutes);
                 seconds.innerHTML = getZero(t.seconds);


                 if (t.total <= 0) {  // если время кончилось - отключить перезапуск
                      clearInterval( timyInterval);
                 }
       }    
}

setClock (`.timer`, chekData );

// РАЗОБРАТСЯ!!!
const  modalTrigger = document.querySelectorAll(`[data-modal]`), // [data-modal] = все элементы с этим атрибутом
        modal = document.querySelector(`.modal`),
        modalCloseBtn  = document.querySelector(`[data-close]`);

        modalTrigger.forEach(btn => {
              // цикл переборав кнопок
              btn.addEventListener(`click`, () => {
                     //        // по клику добавляем или удаляем элементы
                     modal.classList.toggle(`show`);
                     // если есть - добавляем, если нет - удаляем
                     document.body.style.overflow = `hidden`;  
              });
          
       });

//        // ВАЖНО!!! Что бы не плодить одинаковый код, повторяющую часть делаем функцией
       
       function closeModal () {
              modal.classList.toggle(`show`);
              document.body.style.overflow = ``;  
       }

       modalCloseBtn.addEventListener(`click`, closeModal);
       // используем closeModal  после клика
       
        // если юзер просто кликнул на странице
        modal.addEventListener(`click`, (e) => {
              // если е событие произошло на modal элементе
              //  е событие ОБЯЗАТЕЛЬНО задавать (e), если нет - это фуууу, но может работать, но не везде
              if (e.target ===  modal)
              closeModal ();
               // вызываем closeModal  после клика И УСЛОВИЯ
        });
   

        //ВАЖНО!!!  если нажать Escape - отключение модалок, список названий клавиш - в поисковике
        document.addEventListener(`keydown`, (e) => { 
              if (e.code ===  "Escape" &&  modal.classList.contains(`show`)){
              // &&  - и!  modal.classList.contains(`show`) - окно открыто
              closeModal ();
               // вызываем closeModal  после клика И УСЛОВИЯ
              }
        });



});