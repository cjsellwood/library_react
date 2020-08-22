import React, { Component } from "react";
import classes from "./Library.module.css";
import Book from "./Book/Book";

class Library extends Component {
  state = {
    books: [
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
      {
        id: 2,
        title: "Dune 2",
        author: "Frank Herbert",
        pages: 5000,
        readStatus: false,
      },
    ],
  };

  // Changes Read status on press of Read or Not Read button
  changeReadStatus = (id) => {
    // Find book corresponding to index from button pressed
    const index = this.state.books.findIndex((book) => {
      return book.id === id;
    })

    // Get read status of the found book
    const readStatus = this.state.books[index].readStatus;

    // Clone existing books array from state
    const updatedBooks = [
      ...this.state.books,
    ];
    // Update read status of book and set it to new state
    updatedBooks[index].readStatus = !readStatus;
    this.setState({ books: updatedBooks });
  };


  render() {
    // Render each book from the state books array
    const booksList = this.state.books.map((el, i) => {
      return (
        <Book
          title={this.state.books[i].title}
          author={this.state.books[i].author}
          pages={this.state.books[i].pages}
          readStatus={this.state.books[i].readStatus}
          key={this.state.books[i].id}
          id={this.state.books[i].id}
          changeRead={this.changeReadStatus}
        />
      );
    });

    return <div className={classes.Library}>{booksList}</div>;
  }
}

export default Library;
