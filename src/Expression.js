import open from "./Icon/open.svg";
import close from "./Icon/close.svg";
import arrow from "./Icon/arrowLeft.svg"
import { useState } from "react";
//import { Link } from "react-router-dom";

const Expression = () => {

    const [lock, setLock] = useState(close);

    const handleToggle = () => {
        if (lock === close) {
            setLock(open);
        } else {
           setLock(close);
        }
    }


    return ( 
        <div className="expression">
            <h1>Expression ID</h1>
            <p> Look at your selfie camera</p>
            <img src={lock} onClick={handleToggle} alt="locked keys" />
            <a href="/Form"><img className="absolute" src={arrow} alt="back arrow" /></a>
        </div>
     );
}
 
export default Expression;