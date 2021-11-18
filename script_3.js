let number = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(x) {
  let totalNumberofRows = x;
  let space = " ";
   for(let i=1; i <=totalNumberofRows; i++ ){
     for(let j=1; j<=i; j++){
       space += '*' + '  ';
     }
     console.log(space)
     space= '';
   }
  
}

pyramid(number);
