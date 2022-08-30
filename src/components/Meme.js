import React from "react"

export default function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeUrl: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState()

    const styles = {}
    styles.backgroundColor = props.darkMode ? "#444" : "#FFF";
    styles.color = props.darkMode ? "#FFF" : "#000";

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleFormData(event) {
        const { name, value } = event.target
        setMeme(prevState => ({ ...prevState, [name]: value }))
    }

    function handleClick() {
        const memesArr = allMemeImages;
        const randMemeIdx = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randMemeIdx].url
        setMeme(prevState => ({ ...prevState, memeUrl: url }))
    }

    return (
        <section className="MemeInput">
            <div className="meme-input--form">
                <input className="meme-input--field" style={styles} type="text" name="topText" id="topText" placeholder="Top Text" onChange={handleFormData} value={meme.topText} />
                <input className="meme-input--field" style={styles} type="text" name="bottomText" id="bottomText" placeholder="Bottom Text" onChange={handleFormData} value={meme.bottomText} />
                <button className="meme-input--button" onClick={handleClick}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme-input--meme-wrapper">
                <img className="meme-input--image" src={meme.memeUrl} alt="" />
                <h1 className="meme-input--top-text meme-input--text">{meme.topText}</h1>
                <h1 className="meme-input--bottom-text meme-input--text">{meme.bottomText}</h1>
            </div>
        </section>
    )
}