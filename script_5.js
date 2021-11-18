const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//--------------------------------------------------------------------------------------------------
//Est-ce que tous les livres ont été au moins empruntés une fois ?//
//--------------------------------------------------------------------------------------------------
console.log("empruntés ?")

let isRented = [] ;
for (let i=0;i<books.length; i++) {
  if (books[i].rented>0) {
    isRented.push(true);

  }
  
}
console.log(isRented) 
console.log("tout les livres ont bien tous etait empruntés au moins une fois")


//--------------------------------------------------------------------------------------------------
//Quel est livre le plus emprunté ?//
//--------------------------------------------------------------------------------------------------
console.log("Le plus empruntés ?")

let mostbookpicked = books.sort((a,b)=> (a.rented<b.rented)?1:(a.rented>b.rented)?-1:0);
bestBooksArray = mostbookpicked[0]
console.log(bestBooksArray)

//--------------------------------------------------------------------------------------------------
//Quel est livre le moins emprunté ?//
//--------------------------------------------------------------------------------------------------
console.log("Le moins empruntés ?")

let lessbooksArray = books.sort((a,b)=> (a.rented>b.rented)?1:(a.rented<b.rented)?-1:0);
worstBookstaken = lessbooksArray[0]
console.log(worstBookstaken)


//--------------------------------------------------------------------------------------------------
//Trouve le livre avec l'ID: 873495 ;//
//--------------------------------------------------------------------------------------------------

console.log("Le livre avec l'id 873495")

let idbook = books.find(x => x.id === 873495);
console.log(idbook)

//--------------------------------------------------------------------------------------------------
//Supprime le livre avec l'ID: 133712 ;//
//--------------------------------------------------------------------------------------------------
 
console.log("Delete du livre avec l'id 133712")

let removeIndex = books.map(function(item) {return item.id}).indexOf(133712);
console.log("Avant")
console.log(books)

books.splice(removeIndex, 1);
console.log("Après")
console.log(books)

//--------------------------------------------------------------------------------------------------
//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).//
//--------------------------------------------------------------------------------------------------
 console.log("Ordre alphabétique sans l'id 133712")
 
 let booksAaZ = books.sort((a,b)=> (a.title>b.title)?1:(a.title<b.title)?-1:0);
 console.log(booksAaZ)
 