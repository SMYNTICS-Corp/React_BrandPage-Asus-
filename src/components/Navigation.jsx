const Navigation = () => {
    return(
        <nav className="">
            <div className="brand_logo">
                <img src="/images/asus_logo.png" alt="logo_image" />
            </div>
            <ul className="nav_bar">
                <li className="nav_li"><a href="#">MENU</a></li>
                <li className="nav_li"><a href="#">LOCATION</a></li>
                <li className="nav_li"><a href="#">ABOUT</a></li>
                <li className="nav_li"><a href="#">CONTACT</a></li>
            </ul>
            <div>
                <button className="login_btn">Login</button>
            </div>
        </nav >
    )
}

export default Navigation;