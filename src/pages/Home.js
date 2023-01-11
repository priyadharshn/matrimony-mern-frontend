import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const profile = () => {
        alert("Please Login...!!")
        navigate("/login")
    }
    const welcome=()=>{
        navigate('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand"  onClick={welcome}>Matrimony.com</a>
                <div className="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={profile}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <p className="para">May happiness find you in every corner of the GLOBE as you begin your new life together,CONGRATULATIONS!!!...</p>
        </div>
        
    );
}


export default Home;

