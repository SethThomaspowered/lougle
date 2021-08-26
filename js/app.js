
const app = new Vue({
	el: '#app',
	data: {
	  libraryname: 'test',
	  newBook: '',
	  newAuthor: '',
	  books: [
		{id: 0, text: 'It'}, 
		{id: 1, text: 'The Stand'}, 
		{id: 2, text: 'Carrie'},
	  ],
	  authors: [
		  {text: 'Stephen King'},
		  {text: 'Stephen King'},
		  {text: 'Stephen King'},
	  ],
	  address: '123 Oak St'
	},
	computed: {
		bookTitle: function () {
			for (book in this.books) {
				return  book;
			}; 
		} 	
	}
  });
  
let button1 = document.getElementById('button1');
let book0 = document.getElementById('book0');
let author0 = document.getElementById('author0');
let button2 = document.getElementById('button2');
let book1 = document.getElementById('book1');
let author1 = document.getElementById('author1');
let button3 = document.getElementById('button3');
let book2 = document.getElementById('book2');
let author2 = document.getElementById('author2');
function turnBlack() {
	if (book0.style.backgroundColor === 'black') {
		book0.style.backgroundColor="#ffffff";
		
		author0.style.backgroundColor="#ffffff";
		

	} else {
		book0.style.backgroundColor="black"
		
		author0.style.backgroundColor="black";
		
	}
}
function turnBlack1() {
	if (book1.style.backgroundColor === 'black') {
		book1.style.backgroundColor="#ffffff";
		
		author1.style.backgroundColor="#ffffff";
		

	} else {
		book1.style.backgroundColor="black"
		
		author1.style.backgroundColor="black";
		
	}
}
function turnBlack2() {
	if (book2.style.backgroundColor === 'black') {
		book2.style.backgroundColor="#ffffff";
		
		author2.style.backgroundColor="#ffffff";
		

	} else {
		book2.style.display="none";
		
		author2.style.display="none";
		button3.style.display='none';
	}
}

button1.onclick= turnBlack;

let author3 = document.getElementById('author3');
let book3 = document.getElementById('book3');
let checkedout4= document.getElementById('checkedout4')
let addBook = document.getElementById('addbook');
function newRow() {
	book3.style.display = "block";
	author3.style.display = "block";
	checkedout4.style.display = "block";



}
addBook.addEventListener('click', newRow);
