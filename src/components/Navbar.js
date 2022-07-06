const Header = props => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto " href="/">{props.children}</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;