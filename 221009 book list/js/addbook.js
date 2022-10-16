const newTittle = document.querySelector('#newTittle');
const newYear = document.querySelector('#newYear');
const newCategory = document.querySelector('#newCategory');
const newImage = document.querySelector('#newImage');
const newAlt = document.querySelector('#newAlt');
const newAuthor = document.querySelector('#newAuthor');


const btnAdd = document.querySelector('#btnAdd');
const btnExit = document.querySelector('#btnExit');

class Book{

	constructor(tittle, year, category, image, alt, author){
		this.tittle = tittle;
		this.year = year;
		this.category = category;
        this.image = image;
        this.alt = alt;
        this.author = author;
	};
}

let books = [];

btnExit.addEventListener('click', (event) => {
    event.preventDefault();       
    location.href = "index.html";
    
})

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();       
    books = JSON.parse(localStorage.getItem("BookListLG"));


    let newBook = new Book(newTittle.value, newYear.value, newCategory.value, newImage.value, newAlt.value, newAuthor.value);
    
    books.push(newBook);
    daneStorageJSON= JSON.stringify(books);
    localStorage.setItem("BookListLG",daneStorageJSON);

    location.href = "index.html";    
})

