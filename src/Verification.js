
const Verification = () => {
    return ( 
        <div className="question">
            <h1>OTP Verification</h1>
            <p>Please enter the OTP that was sent to 00000000000</p>
            <form className="verification">

                <input type="text" required maxLength={1}/>
                <input type="text" required maxLength={1}/>
                <input type="text" required maxLength={1}/>
                <input className="last_put" type="text" required maxLength={1}/>

                <p>Didnn't receive OTP? <a href="">Resend OTP</a></p>
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Verification;