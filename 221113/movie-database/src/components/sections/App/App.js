import { useState, useEffect } from 'react';
import { u4 as uuidv4 } from 'uuid';
import './App.css';
import WelcomeMessage from '../../atoms/WelcomeMessage/WelcomeMessage.js'
import {post, get , remove} from '../../../helpers/http.js';
import PARAMS from '../../../helpers/params';
import AddMovieForm from '../../molecules/AddMovieForm/AddMovieForm';
import MoviesList from '../../molecules/MoviesList/MoviesList';
import MoviesListHeader from '../../molecules/MovieListHeader/MovieListHeader';
import AddMovieHeader from '../../molecules/AddMovieHeader/AddMovieHeader';
import Button from '../../atoms/Button/Button.js';


function App() {
  // const [messageInputValue, setMessageInputValue] = useState('')
  const [mode, setMode] = useState('MoviesList');
  const [filter, setFilter] = useState('');  
  const [movies, setMovies] = useState([]);
  // const [title, setTitle] = useState([]);

  let title;

  const fetchMovies = () => {
    get(PARAMS.movieUrl)
    .then ((data) => setMovies(data))
    .catch((e) => console.log(e.message))
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  const handleAddMovieForm= (event) => {   
    event.preventDefault();      
    setMode('AddForm')      
  }  

  const handleDiscard= (event) => {   
    event.preventDefault();      
    setMode('MovieList')      
  }  

  const handleSubmitSearch = (event) => {   
    event.preventDefault();
    setFilter(event.target.searchText.value);
    event.target.searchText.value = '';
  }  
  
  function handleRemoveMovie(id) {    
    const removeItem = movies.filter((movie) => {
          return movie.id !== id;
    });
    setMovies(removeItem);
    remove(PARAMS.movieUrl, id)
  }

  const handleAddMovie= (event) => {   
    event.preventDefault();      
  //setFilter(event.target.searchText.value);
    //event.target.searchText.value = '';
    console.log('jestem');     
    
    // console.log(event.target.titleText.value);     
  }  


  const handleChange= (event) => {   
    event.preventDefault();      
  //setFilter(event.target.searchText.value);
    //event.target.searchText.value = '';
     console.log(title);     
    //  console.log(titleText);     
    // console.log(event.target.titleText.value);     
  }  





  

  if (mode==="AddForm") {
    
    return (
      <div className="App">

        <AddMovieHeader
          handleDiscard={handleDiscard}            
          handleAddMovie={handleAddMovie}
        />
                   
        <WelcomeMessage>
          Add new movie...
        </WelcomeMessage> 
            
        <AddMovieForm
            handleChange={handleChange}            
            ttt={title}
            // titleText={title}
        
        />
  
      </div>
    );

  } else {
    
    return (

      <div>

        <MoviesListHeader
          handleAddMovieForm={handleAddMovieForm}        
          handleSubmitSearch={handleSubmitSearch}
        />
               
        <WelcomeMessage>
          Movies
        </WelcomeMessage>
        
        <MoviesList
            movies={movies}          
            filter={filter}      
            handleRemoveMovie={handleRemoveMovie}
            
        />
    
      </div>
    );

  }

  
}

export default App;
