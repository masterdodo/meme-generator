import logo from "../images/will-smith-tadaaa.png"

export default function Header(props) {
    const styles = {}
    styles.color = props.darkMode ? "#000" : "#FFF";

    return (
        <header className="Header">
            <img className="header--logo" src={logo} alt="" />
            <h2 className="header--title" style={styles}>Meme Generator</h2>
            <button onClick={props.handleToggle} className="header--toggle">Toggle Mode</button>
            <p className="header--text">React Course @ 2022</p>
        </header>
    )
}