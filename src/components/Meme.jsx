import { useContext, useRef } from 'react'
import { MemeContext } from '../Context'

export default function Meme() {
  const inputTextRef1 = useRef(null)
  const inputTextRef2 = useRef(null)
  const [getRandomImage, meme, setMeme] = useContext(MemeContext)
  function handleClick() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: inputTextRef1.current.value,
      bottomText: inputTextRef2.current.value,
      image: getRandomImage(),
    }))
    console.log(inputTextRef1.current.value)
    console.log(inputTextRef2.current.value)
    inputTextRef1.current.value = ''
    inputTextRef2.current.value = ''
  }

  return (
    <>
      <form
        method='POST'
        className='meme-form'
        onSubmit={(e) => e.preventDefault()}>
        <input
          id='top-text'
          ref={inputTextRef1}
          type='text'
          className=''
          placeholder='Top Text'
          autoFocus
        />
        <input
          id='bottom-text'
          ref={inputTextRef2}
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
