import Button from '../../atoms/Button/Button.js';
import './MoviesList.css';

function MoviesList(props){

    return (
        <div>

{/* handleClick={() => props.handleRemoveMessageFromApp(message.id)} */}

        <ul>            
        {props.movies.filter(book => book.title.toLowerCase().includes(props.filter.toLowerCase())).map(movie => { 
            return <li key={movie.id}>
                        <img src={movie.poster}/>                                               
                        <div className="btn">
                            <Button
                                handleClick={() => props.handleRemoveMovie(movie.id)}
                                >
                                X
                            </Button>                            
                        </div>
                        <h3>{movie.title}</h3>                   
                        
                        Category: {movie.description}<br/>
                        Year: {movie.year}
                    </li> 
    
          })}
        </ul>
        </div>

    )


}



export default MoviesList;
