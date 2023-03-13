const defaultState = {
    stateOfApp: 0,
    currentKey: undefined,
    books: []
}

const SET_BOOKS = "Set_books";
const DESCRIPTION = "add_description"
const SEARCH = "search"


function bookReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload };
        case DESCRIPTION:
            return {
                ...state,
                books: state.books.map(book => {
                    if (book.key === action.payload.key) {
                        book.description = action.payload.description
                    }
                    return book;
                }),
                stateOfApp: 1,
                currentKey: action.payload.key
            };
        case SEARCH:
            return { ...state, stateOfApp: 0, currentKey: undefined };
        default:
            return state;
    }


};


export default bookReducer;