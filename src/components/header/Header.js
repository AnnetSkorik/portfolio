import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        My name is <em>Anna</em>
                    </strong>
                    <br />And it's my PORTFOLIO
                </h1>
                <div className="header__text">
                    <p>IT fascinates me a lot. <br /> Soon I would like to become part of a team of professionals</p>
                </div>
                <a href="https://resume-anna-skoryk.netlify.app/" className="btn" target="_blank" rel="noopener noreferrer">
                    Show CV
                </a>
            </div>
        </header>
    );
}

export default Header;
