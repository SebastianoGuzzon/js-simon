const numbers = [];

// Visualizzare in pagina 5 numeri casuali (tutti differenti)

while(numbers.length < 5){
  const num = Math.floor(Math.random() * 100) + 1;
  if (!numbers.includes(num)) {
    numbers.push(num)
  }
}

//  Stampo su Html

const divNumbers = document.getElementById('numeri-estratti');
divNumbers.innerHTML = numbers.join(' ');

// Aggiungo Timer con SetTimeout 

setTimeout(function() {
  divNumbers.innerHTML = ' ';
},4000);


setTimeout(() => {
  const numeriAggiunti = [];
  for (let i = 1; i <= 5; i++) {
    const numeroAggiunto = parseInt(prompt(`Inserisci un numero ${i}`))
    numeriAggiunti.push(numeroAggiunto);
  }
  
  // il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Verifica

const equalNumbers = [];

for (const numeroAggiunto of numeriAggiunti) {
  if (numbers.includes(numeroAggiunto)) {
    equalNumbers.push(numeroAggiunto);
  }
}

// Adesso stampo su html le risposte.

if (equalNumbers.length === 0) {
  document.getElementById('not-equal').textContent = ('Peccato! Non hai indovinato.. Riprova!');
} else {
  document.getElementById('equal').textContent = (`Grande! Hai indovinato 
  ${equalNumbers.length} numeri: ${equalNumbers.join(' - ')}`);
}
},5000);

