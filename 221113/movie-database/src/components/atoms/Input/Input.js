import './Input.css';

function Input(props) {
    return (
      <label>
        <input
            type={"text"}            
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}            
            onChange={props.onChange}>
        </input>
      </label>  
    )
  }

  export default Input;

