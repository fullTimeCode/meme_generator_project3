export default function Meme() {
  function handleClick(e) {
    console.log(e)
  }
  return (
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
  )
}
