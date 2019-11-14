let mainInput1 = document.querySelector('#input1'),
    mainInput2 = document.querySelector('#input2'),
    btnPlus = document.getElementById('plus'),
    btnMinus = document.getElementById('minus'),
    btnDel = document.getElementById('del'),
    btnMul = document.getElementById('mul'),
    result = document.getElementById('res');

btnPlus.addEventListener("click", function(){

 
   if(!isNaN(parseInt(mainInput1.value)) && !isNaN(parseInt(mainInput2.value)) && mainInput1.value != '' && mainInput2.value != ''){
    result.value = parseInt(mainInput1.value) + parseInt(mainInput2.value);
  } else if (!isNaN(parseInt(mainInput2.value)) && mainInput1.value == '' && mainInput2.value != '') {
    result.value = parseInt(mainInput2.value);
  } else if (!isNaN(parseInt(mainInput1.value)) && (mainInput1.value != '' && mainInput2.value == '')) {
    result.value = parseInt(mainInput1.value);
  } else if (mainInput1.value == '' && mainInput2.value == '') {
    alert ('Не введены данные!');
  } else {
    alert ('Введены некорректные данные!');
    result.value = 0;
  }
});


btnMinus.addEventListener("click", function(){
  if (!isNaN(parseInt(mainInput1.value)) && !isNaN(parseInt(mainInput2.value)) && mainInput1.value != '' &&  mainInput2.value != ''){
    result.value = parseInt(mainInput1.value) - parseInt(mainInput2.value);
  } else if (mainInput1.value == '' && mainInput2.value != '' && !isNaN(parseInt(mainInput2.value))) {
    result.value = "-" + parseInt(mainInput2.value);
  } else if (mainInput1.value != '' && !isNaN(parseInt(mainInput1.value)) && mainInput2.value == '') {
    result.value = parseInt(mainInput1.value);
  } else if (mainInput1.value == '' && mainInput2.value == ''){
    alert ('Не введены данные!');
  } else {
    alert ('Введены некорректные данные!');
    result.value = 0;
  }
});


btnDel.addEventListener("click", function(){
  if (!isNaN(parseInt(mainInput1.value)) && !isNaN(parseInt(mainInput2.value)) && mainInput1.value != '' &&  mainInput2.value != '' && mainInput1.value != 0 && mainInput2.value != 0){
    result.value = parseInt(mainInput1.value) / parseInt(mainInput2.value);
  } else if (mainInput1.value == '' && mainInput2.value != '' && !isNaN(parseInt(mainInput2.value))) {
    alert ('Так делить нельзя');
  } else if (mainInput1.value != '' && !isNaN(parseInt(mainInput1.value)) && mainInput2.value == '') {
    alert ('На ноль=пустое поле делить нельзя');
  } else if (mainInput1.value == '' && mainInput2.value == ''){
    alert ('Не введены данные!');
  } else if (mainInput1.value == 0 && mainInput2.value == 0){
    alert ('Введены некорректные данные!');
    result.value = 0;
  }  else {
    alert ('Введены некорректные данные!');
    result.value = 0;
  }
});

btnMul.addEventListener("click", function(){
  if (!isNaN(parseInt(mainInput1.value)) && !isNaN(parseInt(mainInput2.value)) && mainInput1.value != '' &&  mainInput2.value != ''){
    result.value = parseInt(mainInput1.value) * parseInt(mainInput2.value);
  } else if (mainInput1.value == '' && mainInput2.value != '' && !isNaN(parseInt(mainInput2.value)) ) {
    result.value = 0;
  } else if (!isNaN(parseInt(mainInput1.value)) && mainInput1.value != '' && mainInput2.value == '') {
    result.value = 0;
  } else if (mainInput1.value == '' && mainInput2.value == ''){
    alert ('Не введены данные!');
  } else {
    alert ('Введены некорректные данные!');
    result.value = 0;
  }
});