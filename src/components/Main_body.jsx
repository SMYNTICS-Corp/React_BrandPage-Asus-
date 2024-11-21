const Main_body = () => {
    return (
        <main className="body_section">
            <div className="body_section_Content">
                <h1>
                    Innovate. <br /> Dominate. <br /> ASUS.
                </h1>
                <p>
                    ELEVATE YOUR GAMING EXPERIENCE WITH ASUS GAMING LAPTOPS. DESIGNED FOR PEAK PERFORMANCE AND IMMERSIVE GAMEPLAY, OUR LAPTOPS ARE ENGINEERED TO EXCEED YOUR EXPECTATIONS.
                </p>
                <div className="btn_section">
                    <button className="btn_shopNow">Shop Now</button>
                    <button className="btn_category">Category</button>
                </div>

                <div className="additional_shop_section">
                <p>Also Available On</p>
                <div className="socialMedia_icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
            </div>

            <div className="body_section_img">
                <img src="/images/asus_board_pic.png" alt="asus_logo" />
            </div>
            
        </main>
    )
}

export default Main_body;