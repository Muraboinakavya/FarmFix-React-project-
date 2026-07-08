import "./Navbar.css"
function Navbar(){
    return(
        <nav className="nav">
        <h1>FarmFix</h1>
        <section>
            <ul className="navbar">
                <li>Home</li>
                <li>Services</li>
                <li>How It Works</li>
                <li>Contact</li>



            </ul>
        </section>
        <button className="login-btn">Login</button>
    </nav>);
}
export default Navbar;