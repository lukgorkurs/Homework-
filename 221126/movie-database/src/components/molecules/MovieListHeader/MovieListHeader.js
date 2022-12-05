import './MoviesListHeader.css';
import Button from '../../atoms/Button/Button.js';
import Input from '../../atoms/Input/Input.js';

function MoviesListHeader(props){

    return (
        <div className="Top">
          <form id="form" onSubmit={props.handleSubmitSearch}>                            
              <Input 
                  name="searchText"
                  placeholder="movie tittle .."
              />
              <Button 
                type="submit">
                Search
              </Button>
              <Button 
                handleClick={props.handleAddMovieForm}>
                Add new movie
              </Button>

          </form>        
        </div>   
    );
};



export default MoviesListHeader;