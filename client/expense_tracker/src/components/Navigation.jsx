import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate()

    const handleLogout = () => {
        const confirmLogout = window.confirm("You are about to be logged out. Do you want to continue?");
        
        if (confirmLogout) {
            localStorage.removeItem('isLoggedIn'); // Clear login flag
            localStorage.removeItem('emailAddress'); // Clear user email address
            navigate('/login'); // Redirect to login page
        }
        
    }

    return (
        <nav className="app-nav">
            <Link to="/home">Home</Link>
            <Link to="/add-expense">Add</Link>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/help">Help</Link>
        </nav>
    )
}

export default Navigation;