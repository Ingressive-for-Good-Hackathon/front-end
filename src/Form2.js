import google from "./Icon/Google.svg";
import wave from "./Icon/waving.svg";
import { Link } from "react-router-dom";

const Form2 = () => {
    return (
       <div className="FormBody">
            <div className="Form">
                <div className="form_input">
                <h1>Hello Dave Joe <img src={wave} alt="wave" /></h1>
                <p>Welcome! Click proceed to continue setting up your account</p>
                <p className="form2"><a href="#">Not you?</a></p>
                <form action="">
                    <button className="form-button" type="submit" id="btn_submit"><Link to="./Question">Proceed</Link></button>
                    <p>or login with Google</p>
                    <button className="google"><img src={google} alt="google" /> <span>Google</span></button>
                    <p>Already a user? <a href="www.noreason.o">Log in</a></p>
                </form>
            </div>
        </div>
       </div>
      );
}
 
export default Form2;