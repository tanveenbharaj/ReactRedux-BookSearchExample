import React,{Component} from 'react';

//connect component to state. which converted booklist to container
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';

//bindActionCreators ensures that
// action returned by selectBook flows to all reducer

import {bindActionCreators} from 'redux';

//react-redux glue between react and redux

class BookList extends Component{
    renderList(){

            return this.props.books.map((book) => {
                //calling actionCreator
                return (<li key={book.title}
                            onClick={() => this.props.selectBook(book)}
                            className="list-group-item">{book.title}</li>);
            });

    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }


}

//take application state as argument. The state is array of books
//whatever is returned will show as this.prop in book-list props
//glue between react and redux

function mapStateToProps(state){
    return {
      books:state.books //key :books and value is array of book objects
    }
}


//anything returned from this function will end as props
//on Booklist container that is {selectBook:selectBook} is returned
//connect application state to props of this container through connect function
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed
//to all reducers through dispatch
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//connect takes function and component and produces container that is aware of state produced by redux
//Promote BookList from a component to a container-it needs to
//know about this new dispatch method, selectBook.Make it available as a prop

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
