import './AddMovieForm.css';
import Input from '../../atoms/Input/Input';

function AddMovieForm(props){

    return (
        <div>
            <form>
                <label>    
                    <input
                        type="text"          
                        id="ttt"
                        name="ttt"                                 
                        onChange={props.handleChange}
                        />                               
                    <p>   

                    <Input 
                        name="titleText"
                        placeholder="movie tittle .."         
                        onChange={props.handleChange}
                    />
                    </p>                                      
                    <p>
                    <Input 
                        name="categoryText"
                        placeholder="movie category ..."
                        onChange={props.handleChange}
                    />
                    </p>
                    <p>
                    <Input 
                        name="yearText"
                        placeholder="movie year ..."
                        onChange={props.handleChange}
                    />
                    </p>
                    <p>
                    <Input 
                        name="posterText"
                        placeholder="movie poster ..."
                        onChange={props.handleChange}
                    />
                    </p>
                </label>

            </form>

        </div>

    )


}


export default AddMovieForm;