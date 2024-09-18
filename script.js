// const modal = document.getElementById("modal");
// const pElement = document.getElementById("paragraph");
// const btnClose = document.getElementById("btn-close");  
// const whellLucky = document.getElementById("whell-lucky");

// let spining = false;
// let currentRotaton = 0;

// function spin() {
//     if (spining) return; 
//     spining = true;

//     const box = document.getElementById("box");
    
//     // تعریف مقادیر جایزه
//     let prizes = {
//         "جایزه 7": [1890, 2250, 2610],
//         "جایزه 6": [1850, 2210, 2570],
//         "جایزه 5": [1810, 2170, 2530],
//         "جایزه 4": [1770, 2130, 2490],
//         "جایزه 3": [1730, 2090, 2450],
//         "جایزه 2": [1650, 2010, 2370],
//         "جایزه 1": [1610, 1970, 2330],
//     };

//     function shuffle(array) {
//         var currentIndex = array.length,
//             randomIndex;
//         while (currentIndex !== 0) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex--;
//             [array[currentIndex], array[randomIndex]] = [
//                 array[randomIndex],
//                 array[currentIndex],
//             ];
//         }
//         return array;
//     }

//     function selectPrize() {
//         let prizeKeys = Object.keys(prizes);
//         let randomIndex = Math.floor(Math.random() * prizeKeys.length);
//         let selectedPrizeName = prizeKeys[randomIndex];
//         let selectedPrizeValue = shuffle(prizes[selectedPrizeName])[0];
//         return { name: selectedPrizeName, value: selectedPrizeValue };
//     }

//     let { name: selectedPrizeName, value: selectedPrizeValue } = selectPrize();
    
//     let extraSpins = 360 * 2;
//     let newRotation = currentRotaton + selectedPrizeValue + extraSpins;
    
//     // نمایش نتیجه 
//     box.style.setProperty("transition", "all ease-out 2s");
//     box.style.transform = "rotate(" + newRotation + "deg)";
//     currentRotaton = newRotation;

//     // نمایش نام جایزه
//     setTimeout(function () {
//         modal.classList.toggle("hidden");
//         pElement.textContent = "شما برنده " + selectedPrizeName + " شدید";
//         whellLucky.classList.toggle("hidden");
//         spining = false;
//     }, 4000);
// }

// btnClose.addEventListener("click", () => {
//     modal.classList.toggle("hidden");
//     whellLucky.classList.toggle("hidden");
// });
const modal = document.getElementById("modal");
const pElement = document.getElementById("paragraph");
const btnClose = document.getElementById("btn-close");  
const whellLucky = document.getElementById("whell-lucky");

let spining = false;
let currentRotation = 0;

// تعریف مقادیر جایزه
let prizes = {
           "جایزه 7": [1890, 2250, 2610],
           "جایزه 6": [1850, 2210, 2570],
           "جایزه 5": [1810, 2170, 2530],
           "جایزه 4": [1770, 2130, 2490],
           "جایزه 3": [1730, 2090, 2450],
           "جایزه 2": [1650, 2010, 2370],
           "جایزه 1": [1610, 1970, 2330],
       };
  
// تبدیل جوایز به آرایه
let prizeKeys = Object.keys(prizes);

function spin() {
  if (spining) return; 
  spining = true;

    const box = document.getElementById("box");

    // انتخاب یک جایزه با اندیس ثابت
    let selectedPrizeIndex = Math.floor(Math.random() * prizeKeys.length);
    let selectedPrizeName = prizeKeys[selectedPrizeIndex];
    let selectedPrizeValue = prizes[selectedPrizeName][Math.floor(Math.random() * prizes[selectedPrizeName].length)];


    let extraSpins = 360 * 3; // تعداد دورهای اضافی
    let newRotation = currentRotation + selectedPrizeValue + extraSpins + (360 * selectedPrizeIndex);
    // نمایش نتیجه 
    box.style.setProperty("transition", "ease-out 11s");
    box.style.transform = "rotate(" + newRotation + "deg)";
    currentRotation = newRotation;

    // نمایش نام جایزه
    setTimeout(function () {
      modal.classList.toggle("hidden");
      pElement.textContent = "شما برنده " + selectedPrizeName + " شدید";
      whellLucky.classList.toggle("hidden");
      spining = false;
  },12000);
}

btnClose.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    whellLucky.classList.toggle("hidden");
     currentRotation = 0;
    box.style.transform = "rotate(0deg)"
});