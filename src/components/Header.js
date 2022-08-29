import logo from "../images/will-smith-tadaaa.png"

export default function Header() {
    return (
        <header className="Header">
            <img className="header--logo" src={logo} alt="" />
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--text">React Course @ 2022</p>
        </header>
    )
}