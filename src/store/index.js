import { createStore, applyMiddleware } from "redux";
import bookReducer from '../store/bookReducer';
import thunk from 'redux-thunk';

export const store = createStore(bookReducer, applyMiddleware(thunk))
