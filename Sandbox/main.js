let pokemon = [
  {
    name: "Charmander",
    natDex: 4,
    height: .6,
    category: "Lizard",
    weight: 18.7
  },
  {
    name: "Charmeleon",
    category: "Flame",
    natDex: 5,
    height: 1.1,
    weight: 41.9
  },
  {
    name: "Charizard",
    category: "Lizard",
    natDex: 6,
    height: 1.7,
    weight: 199.5
  }
];

// function ranInt () { 
//   var randomNumberObject = Math.floor(Math.random() * (150-1) +1); //typo at Math
//   document.getElementById("number").innerHTML = randomNumberObject;
// }
var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = pokemon.name[Math.floor(Math.random()*myArray.length)];
console.log (randomItem)