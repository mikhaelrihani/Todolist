// let titre = document.getElementById("id-du-noeuds");
// console.log(titre);

// // Ici je modifie l'id
// titre.id = "autre-id";
// // Ici je rajoute une classe a mon element html
// titre.classList.add('class-title');
// // Ici je supprime mon element html
// titre.classList.remove('class-title');
// // Bascule une classe (ajoute si n'existe pas deja, supprime si existe deja)
// titre.classList.toggle('class-title');
// titre.textContent = "Nouveau titre";
// // SetAttribute permet de rajouter un attribut a un elemnt html, ici on rajoute un attribut nommée role et sa valeur sera presentation
// titre.setAttribute('role', 'presentation');
// titre.removeAttribute('role');
// // Ci dessous je supprime un element du DOM
// // titre.remove();

// function handleButtonClick(event) {
//     console.log(event);
//     // Pour recuperer l'elemnt sur lequel on a cliqué (ici le bouton GO) on utilise currentTarget
//     const btn = event.currentTarget;
//     if (btn.textContent == "GO")
//         btn.textContent = "Gone";
//     else
//         btn.textContent = "GO";
// }

// let button = document.getElementById("go");
// button.addEventListener('click', handleButtonClick);

// const newElt = document.createElement('span');
// newElt.classList.add('span-class');
// newElt.textContent = "Texte du span";

// // Ci dessous je recupere l'elemnt qui a pour nom de classe container
// const ctn = document.querySelector('.container');
// // Ci dessous je rajoute l'elemnt au container
// ctn.append(newElt);

// function salut() {
//     return function () {
//         addEventListener("DOMContentLoaded", (event) => {
//             addEventListener("DOMContentLoaded", (event) => {
//                 addEventListener("DOMContentLoaded", (event) => {
//                     addEventListener("DOMContentLoaded", (event) => {
//                         addEventListener("DOMContentLoaded", (event) => {
                            
//                         });
//                     });
//                 });
//             });
//         });
//     }
// }

const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

fetch('http://localhost:8080/Todolist-back/public/api/tasks/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));