let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".select");
let elStr = document.querySelector(".output__str");
let elLabelRadio = document.querySelector(".chek__radio");
let elHajm = document.querySelector(".output__hajmi");
let elProduceType = document.querySelector(".produce__type");
let elPizzaUsti = document.querySelector(".output__Ustida");
let elProduceAdd = document.querySelector(".produce__add");
let elPizzaAdd = document.querySelector(".output__adds")


let arr = ["Yupqa","O'rtacha","Qalin"];
let arr1 = ["25sm" , "30sm" , "35sm"];
let arr2 = ["Pomidor","Kurka go'shti","Zaytun","Tuzlangan bodring","Qo'ziqorin","Qazi"];
let arr3 = ["Achchiq","Sosiskali"];
let arrList = [];


function Nonselect(array,list){

   for (let i = 0; i < array.length; i++){

         let elOption = document.createElement("option");
         elOption.setAttribute("value",array[i]);
         elOption.setAttribute("class",".option_val");
         elOption.textContent = array[i];
         elOption.value = array[i];
         list.appendChild(elOption); 

   }

}

Nonselect(arr,elSelect);

elSelect.addEventListener("click", function(evt){
   evt.preventDefault();
   let elStrCout = evt.target.value;
   elStr.textContent =  elStrCout;
   
})


function checkRadio(array,list){

   for (let i = 0; i < array.length; i++){

         let elRadiodiv = document.createElement("label");
         let elRadio = document.createElement("input");
         elRadio.setAttribute("type","radio");
         elRadio.setAttribute("name","radio");
         elRadio.setAttribute("class","visually-hidden");
         elRadiodiv.setAttribute("class","radiodiv");
         elRadiodiv.setAttribute("value",array[i]);
         elRadiodiv.textContent = array[i];
         elRadiodiv.appendChild(elRadio);
         list.appendChild(elRadiodiv); 

   }

}

checkRadio(arr1,elLabelRadio);

elLabelRadio.addEventListener("click", function(evt){
      evt.preventDefault();
      if(evt.target.matches(".radiodiv")){
      let elPizzaHajm = evt.target.textContent;
         elHajm.textContent = elPizzaHajm;
      }
   })

let elList = document.querySelector(".list");
let createLi = document.createElement("li");
let createLi2 = document.createElement("li");
let createLi3 = document.createElement("li");
let createLi4 = document.createElement("li");
let createLi5 = document.createElement("li");
let createLi6 = document.createElement("li");


let elLabel = document.querySelector(".lb__1");
let elInput = document.querySelector(".input__1");

elInput.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput.checked == true) {
      createLi.textContent = "* Pamidor";
      elList.appendChild(createLi)
      } else if (elInput.checked == false) {
         elList.removeChild(createLi);
      }
})

let elLabel2 = document.querySelector(".lb__2");
let elInput2 = document.querySelector(".input__2");

elInput2.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput2.checked == true) {
      createLi2.textContent = "* Kurka go`shti";
      elList.appendChild(createLi2)
      } else if (elInput2.checked == false) {
         elList.removeChild(createLi2);
      }
})

let elLabel3 = document.querySelector(".lb__3");
let elInput3 = document.querySelector(".input__3");

elInput3.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput3.checked == true) {
      createLi3.textContent = "* Zaytun";
      elList.appendChild(createLi3)
      } else if (elInput3.checked == false) {
         elList.removeChild(createLi3);
      }
})

let elLabel4 = document.querySelector(".lb__4");
let elInput4 = document.querySelector(".input__4");

elInput4.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput4.checked == true) {
      createLi4.textContent = "* Tuzlangan Bodring";
      elList.appendChild(createLi4)
      } else if (elInput4.checked == false) {
         elList.removeChild(createLi4);
      }
})

let elLabel5 = document.querySelector(".lb__5");
let elInput5 = document.querySelector(".input__5");

elInput5.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput5.checked == true) {
      createLi5.textContent = "* Qo`ziqorin";
      elList.appendChild(createLi5)
      } else if (elInput5.checked == false) {
         elList.removeChild(createLi5);
      }
})

let elLabel6 = document.querySelector(".lb__6");
let elInput6 = document.querySelector(".input__6");

elInput6.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInput6.checked == true) {
      createLi6.textContent = "* Qazi";
      elList.appendChild(createLi6)
      } else if (elInput6.checked == false) {
         elList.removeChild(createLi6);
      }
})


let elListOne = document.querySelector(".list__one");
let createLiOne = document.createElement("li");
let createLiTwo = document.createElement("li");

let elLabelOne = document.querySelector(".lb__one");
let elInputOne = document.querySelector(".input__one");

elInputOne.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInputOne.checked == true) {
      createLiOne.textContent = "* Achchiq";
      elListOne.appendChild(createLiOne)
      } else if (elInputOne.checked == false) {
         elListOne.removeChild(createLiOne);
      }
})

let elLabelTwo = document.querySelector(".lb__two");
let elInputTwo = document.querySelector(".input__two");

elInputTwo.addEventListener("change", function(evt){
   evt.preventDefault();

   if (elInputTwo.checked == true) {
      createLiTwo.textContent = "* Sosiskali";
      elListOne.appendChild(createLiTwo)
      } else if (elInputTwo.checked == false) {
         elListOne.removeChild(createLiTwo);
      }
})




