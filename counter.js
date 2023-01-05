const votebtn=document.querySelector('.vote');
const resetbtn=document.querySelector('.reset');
const display=document.querySelector('.display');
//event adding
votebtn.addEventListener('click', increment);
resetbtn.addEventListener('click', reset);
let value=0;

function increment(){
    value=value+1;
   if(value<=10)
    display.textContent= value;
    else
   value='out of reach';
}

function reset() {
  value = 0;
  display.textContent = value;
}
