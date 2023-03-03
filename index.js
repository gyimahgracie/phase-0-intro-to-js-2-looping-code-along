// Code your solutions in this file
const cards = ["Tom", "Sally", "Jane"];

function writeCards(cards) {
    const messages = []
  for (let i = 0; i < cards.length; i++) 
  {
    messages.push(`Thank you, ${cards [i]}, for the wonderful surprise gift!`)      
    };
  return messages
}

function countDown() {
let num = 10;
while (num >= 0) {
  console.log(num--);
}
}