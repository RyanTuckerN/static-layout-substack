const orangeButton = document.querySelectorAll('.orange-button')
console.log(orangeButton)

for(b of orangeButton){
  b.addEventListener('click', ()=>{
  alert('You pressed the button!');
})
}