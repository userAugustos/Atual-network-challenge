const carrosselItems = Array.from(document.querySelectorAll('.item'));
const carroselContainer = Array.from(document.querySelectorAll('.container'));

//utils that probably isn't utils
const translateLeftArray = [50, 20, 40, 10];
const translateRightArray = [10, 15, 35, 60];
const translateIndex = [4, 3, 2, 1];
const scaleArray = [0.851371, 0.884671, 0.820278, 0.75, 0.7];


carrosselItems.map((focusItem, itemIndex) => {
  focusItem.addEventListener("mouseover", (e) => {
   if (!focusItem.classList.contains('item-focused')) {
    focusItem.className = "item item-focused";
    carrosselItems.map((removeItem, removeIndex) => {
      if(removeItem != focusItem){
       removeItem.classList.remove('item-focused');

      if(removeIndex < itemIndex){
        removeItem.style.
        transform = `translate3d(${translateLeftArray[removeIndex]}%, 0px, 0px) scale3d(${scaleArray[removeIndex]}, ${scaleArray[removeIndex]}, 1)`;
      }else {
        removeItem.style.
        transform = `translate3d(-${translateRightArray[removeIndex]}%, 0px, 0px) scale3d(${scaleArray[removeIndex]}, ${scaleArray[removeIndex]}, 1)`;
        removeItem.style.zIndex = translateIndex[removeIndex];
      }
     }
   })
   }
  })
})