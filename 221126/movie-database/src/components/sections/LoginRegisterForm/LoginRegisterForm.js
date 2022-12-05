import './LoginRegisterForm.css'
import Button from "../../atoms/Button/Button"
import Input from "../../atoms/Input/Input"

// import Button from "components/atoms/Button/Button"
// import Input from "components/atoms/Input/Input"

function LoginRegisterForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      
      <table>        
      
        
        

        <tr>
        <td>email</td>
        
          <td>          
          <label>          
          <Input
            value={props.emailInputValue}
            onChange={props.handleEmailChange}
          />
          </label>
          </td>
        
        {/* {
          props.isEmailInputError
            ? <small>Pole email jest nieprawidlowe</small>
            : null
        }         */}
        </tr>
      
        <tr>
        <td>
          password
          </td>   
        
                 
          <td>
          <label>
          <Input
            value={props.passwordInputValue}
            onChange={props.handlePasswordChange}
            type="password"
          />
          </label>
          </td>
        
        

        {/* {
          props.isPasswordInputError
            ? <small>Pole password musi miec minimum 6 znakow</small>
            : null
        } */}
        
        </tr>
      
      

      {/* text={props.submitText} */}

      <td></td>
      <td>

      <Button>
            Zaloguj
      </Button>
      </td>

      </table>
      {props.isLoginError
        ? <p> Nieprawidlowy login lub haslo</p>
        : null
      }
    </form>
  )
}

export default LoginRegisterForm