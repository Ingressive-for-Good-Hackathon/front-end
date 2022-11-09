import access from "./Icon/access.svg"
import { Link } from "react-router-dom";

const Access = () => {
    return ( 
        <div className="FormBody">
            <div className="Form">
                <div className="form_input">
                    <h1>Access Expression</h1>
                    <p>An access expression will let you gather access when it detects some facial expression e.g smiling.</p>
                    <img className="access-img" src={access} alt="access" />
                    <p>I'm Ready</p>
                    <button className="access-btn"><Link to="/Expression">Start Camera</Link></button>
                </div>
            </div>
        </div>
     );
}
 
export default Access;