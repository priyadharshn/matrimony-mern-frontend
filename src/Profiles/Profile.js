function Profile() {
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <h1 className="head">Profiles</h1>
                <div className="nav-item">
                    <ul className="navbar-nav" id="nav">
                        <li className="link-item">
                            <a className="nav-link" id="prof" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="prof" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="prof" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="description">
                <p>I'm looking for a:
                </p>
                <a href="/groom" className="btn btn-dark" id="btns" type="button">Groom</a>
                <a href="/bride" className="btn btn-dark" id="btns" type="button">Bride</a>
            </div>
        </div>
    );
}
export default Profile;