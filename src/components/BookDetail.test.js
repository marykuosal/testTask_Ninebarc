import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import BookDetailImpl  from "./BookDetailImplementation";

/**
 * @jest-environment jsdom
 */

const book = {
  author: "Clifford",
  date: "February 1990",
  description: undefined,
  key: "/works/undefined1565W",
  photo: "https://covers.openlibrary.org/b/isbn/9780671726881-M.jpg",
  title: "The Cuckoo’s Egg",
};

test("correct displaying of book details", () => {
  render(<BookDetailImpl book={book} />);
  const author = screen.getByText("Author: Clifford");
  const title = screen.getByText("Tittle: The Cuckoo’s Egg")
  const date = screen.getByText("Date: February 1990")
  const description = screen.getByText("Description: none")

  expect(author).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
