import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={"/movement/event"}>Hem</Link></li>
                <li><Link to={"/movement/event/booking"}>Köp biljett</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;