import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';
import Book from "../components/Book";


/**
 * @jest-environment jsdom
 */


const book = {
  author: "Clifford",
  date: "February 1990",
  description: undefined,
  key: "/works/OL3741565W",
  photo: "https://covers.openlibrary.org/b/isbn/9780671726881-M.jpg",
  title: "The Cuckoo’s Egg",
};

test("correct displaying of book", () => {

  render(<Book book={book} />);
  const title = screen.getByText("Title: The Cuckoo’s Egg");
  const author = screen.getByText("Author: Clifford");
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});
