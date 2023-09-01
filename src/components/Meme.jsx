import { useContext, useState } from 'react'
import { MemeContext } from '../Context'

export default function Meme() {
  const getRandomImage = useContext(MemeContext)
  const [image, setImage] = useState({})
  function handleClick() {
    setImage(getRandomImage())
  }

  return (
    <>
      <form
        method='POST'
        className='meme-form'
        onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className=''
          placeholder='Top Text'
          autoFocus
        />
        <input
          type='text'
          className=''
          placeholder='Bottom Text'
        />
        <button
          type='submit'
          onClick={handleClick}>
          Generate
        </button>
      </form>
      <figure className='image-container'>
        {image && (
          <img
            src={image.url}
            alt={image.name}
          />
        )}
      </figure>
    </>
  )
}
