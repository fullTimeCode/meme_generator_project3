export default function Meme() {
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
      <button type='submit'>Generate</button>
    </form>
  )
}
