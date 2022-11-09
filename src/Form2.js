import google from "./Icon/Google.svg"
import wave from "./Icon/waving.svg"

const Form2 = () => {
    return (
        <div className="Form">
            <div className="form_input">
            <h1>Hello Dave Joe <img src={wave} alt="a waving hand" /></h1>
            <p>Welcome! Click proceed to continue setting up your account</p>
            <p className="form2"><a href="#">Not you?</a></p>
            <form action="">
                <button className="form-button" type="submit" id="btn_submit">Proceed</button>
                <p>or login with Google</p>
                <button className="google"><img src={google} alt="google" /> <span>Google</span></button>
                <p>Already a user? <a href="">Log in</a></p>
            </form>
            </div>
        </div>
      );
}
 
export default Form2;