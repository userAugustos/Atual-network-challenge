const inputText = document.querySelector('input[name="value"]');
const reducerValue = document.querySelector('input[name="reducer"]');
const reducerOutput = document.querySelector('.output #reducer');
const stringOutput = document.querySelector('.output #string-formating');
const revertStringButton = document.querySelector('#revertString');
const removeAccentButton = document.querySelector('#removeAccent');

//revert text
const revertString = (value) => {
  for ((i = value.length  - 1), concatenatedString = ''; i >= 0;){ //.split() com .reverse() e .join() agindo como o final onde concatenamos, também resolve;
    concatenatedString += value[i--]
  };
  return concatenatedString;
}

//reducer 5%
const reducer = (value) => {
  return value * Math.pow(1 + (-5 / 100), 2); //also could did it with params, like decrement (where we know it's gonna be 5), and amount (where we know it's gonna be 2)
}

//removing accents
const removeAccent = (value) => {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

revertStringButton.addEventListener("click", e => {
  console.log('clicou');
  stringOutput.innerHTML = revertString(inputText.value)
})

removeAccentButton.addEventListener("click", e => {
  stringOutput.innerHTML = removeAccent(inputText.value);
})

reducerValue.addEventListener("change", e => {
  reducerOutput.innerHTML = reducer(e.target.value);
});
