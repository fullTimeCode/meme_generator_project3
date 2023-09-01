import trollFace from '../assets/images/troll-face.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          className='logo--icon'
          src={trollFace}
          alt=''
        />
        <h2 className='logo--title'>Meme Generator</h2>
      </div>

      <h3 className='header--info'>React Course Project-3</h3>
    </header>
  )
}
