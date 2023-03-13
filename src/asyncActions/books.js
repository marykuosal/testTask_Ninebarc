import axios from 'axios';

export const getBooks = () => {
  return (dispatch, searchText) => {
    axios
      .get(
        `http://openlibrary.org/search.json?q=${encodeURIComponent(
          searchText
        )}`
      )
      .then((response) => {
        dispatch({
          type: "Set_books",
          payload: response.data.docs.map((doc) => {
            if ("isbn" in doc) {
              return {
                date: "publish_date" in doc ? doc.publish_date[0] : undefined,
                key: doc.key,
                title: "title" in doc ? doc.title : undefined,
                author: "author_name" in doc ? doc.author_name[0] : undefined,
                photo: `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-M.jpg`,
                description: undefined,
              };
            } else {
              return {
                date: "publish_date" in doc ? doc.publish_date[0] : undefined,
                key: doc.key,
                title: "title" in doc ? doc.title : undefined,
                author: "author_name" in doc ? doc.author_name[0] : undefined,
                photo: undefined,
                description: undefined,
              };
            }
          }),
        });
      })
      .catch(function (error) {
        console.log(error);
        alert("Sorry. Your search request has failed. Please try again.");
      });
  };
}

export const getBookDetail = () => {
  return (dispatch, key) => {

    axios
      .get(
        `https://openlibrary.org${key}.json`
      )
      .then((response) => {
        dispatch({
          type: "add_description",
          payload: {
            description: response.data.description.value,
            key: key
          }
        });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: "add_description",
          payload: {
            description: undefined,
            key: key,
          }
        });
      })
  }
}