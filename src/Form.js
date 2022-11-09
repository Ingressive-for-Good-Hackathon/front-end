import google from "./Icon/Google.svg"
import vue from "./Icon/vuesax.svg"
import { useState } from "react";

const Form = () => {

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(vue);

    const handleToggle = () => {
        if (type == "password") {
            setIcon(vue);
            setType('text');
        } else {
            setIcon(vue);
            setType('password');
        }
    }

    return ( 

        <div className="Form">
            <div className="form_input">
                <h1>Hello Create an Account</h1>
                <p>Create an Account</p>
                <form>
    
                    
                    <select name="id_number" id="id_number" required="required">
                        <option disabled selected value="nin">Select an ID</option>
                        <option value="nin">NIN CARD</option>
                    </select>
                    <label className="id-number" htmlFor="id_number">ID Type</label>

                    <input type="text" id="phone-number" required="required"/>
                    <label className="phone-number" htmlFor="phonr-number">ID Number</label>

                    <input type={type} id="password" required="required"/>
                    <label className="password" htmlFor="password">Password</label>

                    <img className="pass_word" src={icon} onClick={handleToggle} alt="visible" />

                    <button type="submit" id="btn_submit">Proceed</button>
                    <p>or login with Google</p>
                    <button className="google"><img src={google} alt="google" /> <span>Google</span></button>
                    <p>Already a user? <a href="">Log in</a></p>
                </form>
            </div>

            
        </div>
    );
}
 
export default Form;