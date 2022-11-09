import { Link } from "react-router-dom";

const Question = () => {
    return ( 
        <div className="question">
            <h1>Create a Secutity Question</h1>
            <p>Create an Account</p>
            <form action="">
               
                <select name="personal" id="security-select" required>
                    <option disabled selected value="">Security  Question</option>
                    <option value="dog">Where did you grow up</option>
                    <option value="cat">What is your mother's maiden's name</option>
                    <option value="hamster">what is the name of your childhood friend</option>
                </select>
                <label className="id_number" htmlFor="id_number">Security Question</label>

                <input type="text" id="security_ans" placeholder="" required />
                
                <label className="security_ans" htmlFor="security_ans">Answer</label>

                <button type="submit" id="btn_submit"><Link to="./Verification">Proceed</Link></button>
            </form>
        </div>
     );
}
 
export default Question;