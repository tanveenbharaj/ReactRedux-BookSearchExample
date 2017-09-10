import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
    books:BooksReducer,
    activeBook:ActiveBook
});
//books is globbal application state
//key is books and value is BooksReducer
export default rootReducer;
