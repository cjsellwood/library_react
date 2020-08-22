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
    ],
  };

  changeReadStatus = (id) => {
    // console.log(book.id);
    console.log(id);
    const index = this.state.books.findIndex((book) => {
      return book.id = id;
    })

    console.log("index" - index);

    // console.log("Current Book - ", id);
    // const readStatus = this.state.books[i].readStatus;
    // console.log("Current State Books - ", this.state.books);
    // const updatedBooks = {
    //   ...this.state.books,
    // };
    // console.log("Current Read Status - ", updatedBooks[i].readStatus);
    // updatedBooks[i].readStatus = !readStatus;
    // console.log("Updated books - ", updatedBooks);
    // this.setState({ books: updatedBooks });
    // console.log("Updated state - ", this.state.books);
  };

  render() {
    console.log("Render State", this.state);
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
