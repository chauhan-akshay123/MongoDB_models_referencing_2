const { initializeDatabase } = require("./db/db.connect");
const Author = require("./models/author.model");
const Book = require("./models/book.model");

const authorData = {
   name: "Jenny", 
   email: "jenny@gmail.com",
};

initializeDatabase();

const addAuthor = async () => {
    try{
     const newAuthor = new Author(authorData);
     await newAuthor.save();
     console.log("Author added successfully.");
    } catch(error){
        console.log("Error", error);
    }
}

// addAuthor();

const bookData = {
    title: "Go to heaven",
    genre: "Philosophy",
    author: "67a078717aba50f669939e00"
}

const addBook = async () => {
    try{
      const newBook = new Book(bookData);
      await newBook.save();  
      console.log("Book added successfully.");
    } catch(error){
        console.log("Error", error);
    }
}

// addBook();

const getAllBooks = async () => {
    try{
     const allBooks = await Book.find().populate("author");   
     console.log("All Books", allBooks);
    } catch(error){
        console.log("Error", error);
    }
}

getAllBooks();