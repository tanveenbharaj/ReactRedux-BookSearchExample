//Action creator
export function selectBook(book){
    //needs to return Action
    return {
        type:'BOOK_SELECTED',
        payload:book
    };
}
