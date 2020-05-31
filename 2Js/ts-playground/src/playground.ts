console.log("This is your playground, experiment with TS code and check the console");
// Bibloteca 
// V2 con typescript

interface Book {
    title: string;
    isRead: boolean;
}

type Library = Book[]; // Se define un nuvo typo que será un array de objetos libros

// const books :  Book[]   = [
const books :  Library   = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
]


// function isBookRead (books: Book[], titleToSearch: string ) {
function isBookRead (books: Library, titleToSearch: string ) {
    let find = books.find( book => book.title === titleToSearch );
    let result = find !== undefined ? find.isRead : false  ;
    return result;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
