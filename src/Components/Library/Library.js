import React, { Component } from "react";
import classes from "./Library.module.css";
import Book from "./Book/Book";
import NewBook from "./NewBook/NewBook";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";

class Library extends Component {
  state = {
    books: [],
    showModal: false,
    newBook: {
      title: "",
      author: "",
      pages: 0,
      readStatus: false,
    },
  };

  // Book object constructor
  BookItem = (title, author, pages, read) => {
    this.id = this.state.books.length;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  };
  // NewBook = New BookItem("Title", "Author", "124", false)

  // Get books array from local storage on first load
  componentDidMount() {
    let booksStored = this.getBooksFromStorage();
    // Test books added
    if (booksStored === null) {
      booksStored = [
        {
          id: 0,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 300,
          readStatus: false,
        },
        {
          id: 1,
          title: "Dune",
          author: "Frank Herbert",
          pages: 500,
          readStatus: true,
        },
      ];
    }
    this.setState({ books: booksStored });
  }

  // Get books from local storage
  getBooksFromStorage = () => {
    let booksStored = JSON.parse(window.localStorage.getItem("books"));
    // if (booksStored === null) {
    //   booksStored = [];
    // }
    return booksStored;
  };

  // Changes Read status on press of Read or Not Read button
  changeReadStatusHandler = (id) => {
    // Find book corresponding to index from button pressed
    const index = this.state.books.findIndex((book) => {
      return book.id === id;
    });

    // Get read status of the found book
    const readStatus = this.state.books[index].readStatus;

    // Clone existing books array from state
    const updatedBooks = [...this.state.books];
    // Update read status of book and set it to new state
    updatedBooks[index].readStatus = !readStatus;
    this.setState({ books: updatedBooks });
  };

  // Delete book when button pressed on a book
  deleteBookHandler = (id) => {
    // Find book corresponding to index from button pressed
    const index = this.state.books.findIndex((book) => {
      return book.id === id;
    });

    let updatedBooks = [...this.state.books];
    updatedBooks.splice(index, 1);
    this.setState({ books: updatedBooks });
  };

  //Hide and show modal functions
  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  // Handle form submission
  submitFormHandler = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("-----Submitted-----")
    this.hideModalHandler();
    console.log(this.state);
  };

  // Changes state to the entered form values
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let updatedBook = { ...this.state.newBook };

    // For readStatus
    if (name === "readStatus") {
      if (value === "true") {
        updatedBook["readStatus"] = true;
      } else {
        updatedBook["readStatus"] = false;
      }
    } else {
      updatedBook[name] = value;
    }

    this.setState({ newBook: updatedBook });

  };

  render() {
    // Render each book from the state books array
    console.log(this.state);
    const booksList = this.state.books.map((el, i) => {
      return (
        <Book
          title={this.state.books[i].title}
          author={this.state.books[i].author}
          pages={this.state.books[i].pages}
          readStatus={this.state.books[i].readStatus}
          key={this.state.books[i].id}
          id={this.state.books[i].id}
          changeRead={this.changeReadStatusHandler}
          deleteBook={this.deleteBookHandler}
        />
      );
    });

    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          hideModal={this.hideModalHandler}
          submitForm={this.submitFormHandler}
          changed={this.changeHandler}
        />
        <div className={classes.Library}>
          {booksList}
          <NewBook showModal={this.showModalHandler} />
        </div>
      </Aux>
    );
  }
}

export default Library;
