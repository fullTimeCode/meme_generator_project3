import { useContext } from 'react'
import { MemeContext } from '../Context'

export default function Meme() {
  const [getRandomImage, meme, setMeme] = useContext(MemeContext)
  function handleClick() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: getRandomImage(),
    }))
    console.log(meme)
  }

  function handleChange(event) {
    console.log(event.target.value)
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <form
        method='POST'
        className='meme-form'
        onSubmit={(e) => e.preventDefault()}>
        <input
          id='top-text'
          type='text'
          className=''
          placeholder='Top Text'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
          autoFocus
        />
        <input
          id='bottom-text'
          name='bottomText'
          type='text'
          className=''
          placeholder='Bottom Text'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          type='submit'
          onClick={handleClick}>
          Generate
        </button>
      </form>
      <figure className='image-container'>
        {meme.image && (
          <img
            src={meme.image.url}
            alt={meme.image.name}
          />
        )}
      </figure>
    </>
  )
}
