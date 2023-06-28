class book {
    constructor(title, author, cover) {
        this.title = title;
        this.author = author;
        this.cover = cover;
    }
    //Méthode qui permet de créer les cartes de Livres
    display() {
        //Vérification de la récupération des valeurs
        console.log(this.title + " by " + this.author + " with " + this.cover);
        //Je crée le HTML qui permet d'afficher la carte du livre avec un innerHTML situé dans la div bookContainer
        const bookContainer = document.getElementById('bookContainer');
        bookContainer.innerHTML += `
        <div class="col-md-3">
            <div class="card" style="width: 15rem;">
                <img src="`+ this.cover +`" class="card-img-top" alt="Film cover picture">
                <div class="card-body">
                    <h5 class="card-title">`+ this.title +`</h5>
                    <p class="card-text">`+ this.author.toUpperCase() +`</p>
                    <button class="deleteCards">Delete</button>
                </div>
            </div>
        </div>`

        //Création du composant de deletion de cartes
        const deleteCard = document.getElementsByClassName('deleteCards');
        //Je fais un tableau qui permet d'identifier la carte à supprimer
        for (let i = 0; i < deleteCard.length; i++) {
            deleteCard[i].addEventListener('click', this.deleteThisCard.bind(this));
        }
    }

    //Méthode qui permet de supprimer la carte du livre
    deleteThisCard() {
        event.target.parentNode.parentNode.parentNode.remove();
    }
}

//Récupération des données du formulaire
const form = document.querySelector('form');

//Création d'un nouvel objet book à partir des données du formulaire
form.addEventListener('submit', (e) => {
    //On bloque le rafraichissement auto
    e.preventDefault();
    //Vérification de la récupération des valeurs
    console.log(e.target.inputName.value);
    console.log(e.target.inputAuthor.value);
    console.log(e.target.inputCover.value);

    //Création d'un nouvel objet book
    let newBook = new book(e.target.inputName.value, e.target.inputAuthor.value, e.target.inputCover.value);
    newBook.display();
    form.reset();
});

//Animation du titre qui apparait doucement
$(document).ready(function () {
    let heading = $("#pulse");
    heading.fadeIn(2000);
});