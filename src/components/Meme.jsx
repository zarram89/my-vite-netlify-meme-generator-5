import { useState } from 'react';
import './Meme.css'
import memesData from '../memesData'

function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    random: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      random: url,
    }))
  }

  return (
    <main className='main'>
      <div className='form'>
        <input
          className='form-input'
          placeholder='Top text'
          type="text"
        />
        <input
          className='form-input'
          placeholder='Bottom text'
          type="text" />
        <button onClick={getMemeImage} className='form-button'>Get a new meme image 🖼</button>
      </div>
      <img src={meme.random} className="meme-image" />
    </main>
  )
}

export default Meme