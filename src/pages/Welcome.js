import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    const home = () => {
        navigate("/home");
    }
    home()
    return (
        <nav>
            <header>
                <div className="logo">
                    {/* <img src="" className="mg"></img> */}
                    <a className="navbar-brand">Matrimony.com</a>
                    <div className="icon">
                        <span><i className="material-icons">Contact Us +(04369 356458)</i></span><br></br>
                        <span><i class="cid-contact-mail">Email: matrimonial@gmail.com</i></span>
                    </div>
                    <div className="welcome">
                        <h3 className="a">Matrimonial Search.</h3>
                        <h1 className="b">Best Matching</h1>
                        <h2 className="b">Couples!!..</h2>
                    </div>
                    <div className="b2">
                        <button className="btn btn-success" onClick={home}>Welcome!!..</button>
                    </div>
                </div>
            </header>
        </nav>
    );
}
export default Welcome;