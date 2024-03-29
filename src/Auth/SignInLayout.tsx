import Signin from "../assets/Images/SignIn.png"
import frame from '../assets/Images/Frame.png'
import SignIn from "./SignInForm/SignIn"

const SignInLayout = () => {
  return (
    <>
      
        <div className="authWrapper">
          <div className="left-container">
            <img src={Signin} alt="signin" id="signin-img" />
          </div>

          <div className="right-container">
            <div className="row1">
              <img src={frame} alt="logo" id="auth-frame" />
            </div>
            <div className="row2">
              <SignIn />
            </div>
          </div>
        </div>
    
    </>
  )
}

export default SignInLayout