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
            <div class="card " style="width: 15rem;">
                <img src="`+ this.cover +`" class="card-img-top" alt="Film cover picture">
                <div class="card-body">
                    <h5 class="card-title">`+ this.title +`</h5>
                    <p class="card-text">`+ this.author.toUpperCase() +`</p>
                </div>
            </div>
        </div>`
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

    //Animation de la carte : si on clique sur la carte le texte se rétracte ou se remet en place.
    $(document).ready(function () {
        $('.card').click(() => {
            $('.card-body').toggle();
        });
    });

});
