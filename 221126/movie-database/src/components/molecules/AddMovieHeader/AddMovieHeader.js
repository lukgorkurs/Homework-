import Button from '../../atoms/Button/Button';
import './AddMovieHeader.css';

function AddMovieHeader(props){

    return (
   
        <div className="Top">          
              <Button 
                handleClick={props.handleAddMovie}>
                Add movie
              </Button>
              <Button 
                handleClick={props.handleDiscard}>
                Discard
              </Button>
        </div>   
    );
  };



export default AddMovieHeader;