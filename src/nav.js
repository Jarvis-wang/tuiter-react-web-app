import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav;