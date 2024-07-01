import { NavLink } from "react-router-dom";

import './styles/Navigation.scss';

const Navigation: React.FC = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/status">Status</NavLink></li>
                    <li><NavLink to="/reports">Reports</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export { Navigation };