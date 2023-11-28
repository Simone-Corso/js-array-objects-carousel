//Dato un array di oggetti letterali con:
//URL dell’immagine
//Titolo della slide
//Descrizione della slide
//Creare un carosello come nella foto allegata.


//Inserisco le immagini fornite 

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//Creo un ciclo for per immagini
let lista = '';

for (let i = 0; i < images.length; i++){
    //inserirò il div lista con img, con delle variabili pronte all'esterno
    lista += `<div class="lista"><img src="./img/${images}></div>`;
};
console.log(lista);

//stamperò la variabile lista

    const slider = document.querySelector('container > slider').innerHTML+=lista;


//creo delle varibili prima e dopo per il click di cambio immagine

let prima = document.querySelector('prima');
let dopo = document.querySelector('dopo');
console.log(prima,dopo);

//creo un evento per il click dopo

dopo.addEventListener('click', function(){
    if (dopo === images.length+1){
        dopo = 0;
    }
    else {
        dopo++;
    };
});

prima.addEventListener('click' function (){
    if (prima === 0){
        prima = images.length -1;
    }
    else {
        prima--;
    }
})