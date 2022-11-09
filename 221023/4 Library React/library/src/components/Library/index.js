import React, {useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {post, get} from '../../helpers/http.js';
import URLS from '../../helpers/params.js';
import './index.css';



function Library() {

    const [bookLibrary, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [mode, setMode] = useState('lib');
    const [alert, setAlert] = useState('');

    
    
    const fetchBooks = () => {
        get(URLS.books)
        .then ((data) => setBooks(data))
        .catch((e) => console.log(e.message))
      }
    
    
    useEffect(() => {
        fetchBooks();
      }, [])


      const handleSubmit = (event) => {   
        event.preventDefault();
        setFilter(event.target.searchText.value);
        event.target.searchText.value = '';
      }  

      const handleSubmitAdd = (event) => {   
        event.preventDefault();
        let error = 0;

        setAlert('');

        // if (event.target.addTitle.value.length < 4) {
        //   error = 1;
        //   setAlert('title to short');
        // }

        // if (event.target.addImage.value.length < 4) {
        //   error = 1;
        //   setAlert('image link to short');
        // }

        // if (event.target.addAlt.value.length < 4) {
        //   error = 1;
        //   setAlert('alternative text to short');
        // }

        // if (event.target.addYear.value.length != 4) {
        //   error = 1;
        //   setAlert('invalid year');
        // }

        // if (event.target.addCategory.value.length < 4) {
        //   error = 1;
        //   setAlert('category to short');
        // }

        // if (event.target.addAuthor.value.length < 4) {
        //   error = 1;
        //   setAlert('author to short');
        // }



        if (error === 0) {

          const newBook = {
            id: uuidv4(),
            title: event.target.addTitle.value,       
            year: event.target.addYear.value,       
            category: event.target.addCategory.value,       
            image: event.target.addImage.value,       
            alt: event.target.addAlt.value,       
            author: event.target.addAuthor.value           
          }


          const newLibrary = bookLibrary.concat(newBook);
          setBooks(newLibrary);

          post(URLS.books,newBook)
         
          setAlert('');
          setMode('lib');

        }

        
      }  


      const handleAddBook= (event) => {   
        event.preventDefault();
        console.log('test');

        setMode('add')      
        console.log(mode); 
          
      }  


      if (mode === 'add')
      return (
        <div>
            <h3>Complete the form</h3>
            <form id="formAdd" onSubmit={handleSubmitAdd}>
                <label>
                  <input  id="addText" type="text"  name="addTitle" placeholder="book title ..." /><br/>
                  <input  id="addText" type="text"  name="addImage" placeholder="link to book image ..." /><br/>
                  <input  id="addText" type="text"  name="addAlt" placeholder="alt text ..." /><br/>
                  <input  id="addText" type="text"  name="addYear" placeholder="publishment year ..." /><br/>
                  <input  id="addText" type="text"  name="addCategory" placeholder="category ..." /><br/>
                  <input  id="addText" type="text"  name="addAuthor" placeholder="author ..." /><br/>

                  <button type="submit" id="btnSubmit">Add new book</button>
                </label>

            </form>
            <span id="alert">{alert}</span>
        </div>

              

      );
      
     
     return (
        
      <div>
        <form id="form" onSubmit={handleSubmit}>
            <label>              
              <input id="searchText" type="text"  name="searchText" placeholder="book tittle ..." />
            </label>
            <button type="submit" id="btnSearch">Search</button>
            <button type="button" id="btnOpenAdd" onClick={handleAddBook}>Add new book</button>
        </form>          
        
          <ul>


          {/* {bookLibrary.map(book => {           */}

              {bookLibrary.filter(book => book.title.toLowerCase().includes(filter.toLowerCase())).map(book => {
                return <li key={book.title}>
                          <h3>{book.title}</h3>
                          <img src={book.image} alt={book.alt}/>                          
                          <br/>
                          <b>year:</b> {book.year}<br/>
                          <b>category:</b> {book.category}<br/>
                          <b>author:</b> {book.author}              
                          </li> 

              })}

          </ul>
          </div>
        
      );

 
}


export default Library;