
let pscore = 0
let cscore = 0


let pdisplay = document.querySelector('.pscore > .output')
let cdisplay = document.querySelector('.cscore > .output')

let message = document.querySelector('.mess')

const options = document.querySelectorAll('.options')
options.forEach(options =>
   options.addEventListener('click', function(){
      const pInp = this.value;
      
      const cOpt = ['Rock', 'Paper', 'Scissor'];
      const cInp = cOpt[Math.floor(Math.random() * 3)]
      
      //display inputs
      pdisplay.textContent = this.textContent;
      cdisplay.textContent = compDisplay(cInp)
      compareInp(pInp, cInp);
      updateScore();
      
      if (checkWinner()) { 
         pscore = cscore = 0
      }
   })
)

function compDisplay(inp){
   if(inp === 'Rock'){
      return '✊'
   }
   if(inp === 'Paper') {
      return '🤚'
   }
   if(inp === 'Scissor') {
      return '✌️'
   }
}

function updateScore() {
   document.querySelector('.pscore > .score').textContent = pscore
   document.querySelector('.cscore > .score').textContent = cscore
}

function checkWinner(){
   if (pscore === 5 || cscore === 5) {
      const winner = 
         pscore === 5 ?
         'You won the match' :
         'Computer won the match';
      message.textContent = winner
      return true
   }
   return false
}
function compareInp(p, c) {
   const curr = `${p} vs ${c}`
   
   //Tie Check
   if (c === p) {
      message.textContent = (`${curr} : Tie`)
      return
   }
   
   //Rock
   if (p === 'Rock') {
      if (c === 'Scissor') {
         message.textContent = (`${curr} : You Scored`)
         pscore++
      }else{
         message.textContent = (`${curr} : Computer Scored`)
         cscore++
      }
   }
   
   //Paper
   if (p === 'Paper') {
      if (c === 'Rock') {
         message.textContent = (`${curr} : You Scored`)
         pscore++
      }else {
         message.textContent = (`${curr} : Computer Scored`)
         cscore++
      }
   }
   
   //Scissor
   if (p === 'Scissor') {
      if (c === 'Paper') {
         message.textContent = (`${curr} : You Scored`)
         pscore++
      }else {
         message.textContent = (`${curr} : Computer Scored`)
         cscore++
      }
   }
}
