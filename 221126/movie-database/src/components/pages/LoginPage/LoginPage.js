import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import LoginRegisterForm from "../../sections/LoginRegisterForm/LoginRegisterForm";

function LoginPage(){

    return (
        <div>            
            <MainTemplate>
                <LoginRegisterForm
                    // handleSubmit={handleSubmit}
                    // emailInputValue={emailInputValue}
                    // handleEmailChange={handleEmailChange}
                    // isEmailInputError={isEmailInputError}
                    // passwordInputValue={passwordInputValue}
                    // handlePasswordChange={handlePasswordChange}
                    // isPasswordInputError={isPasswordInputError}
                    // submitText="Login"
                    // isLoginError={isLoginError}
                />
            </MainTemplate>

        </div>
    )


}



export default LoginPage;
