import Header from './components/Header'
import Main from './components/Main'
import data from './assets/data/memesdata'
import { MemeContext } from './Context'
import { useState } from 'react'

export default function App() {
  const [allData, setAllData] = useState(data)
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: getRamdomImage(),
  })

  function getRamdomImage() {
    const memes = allData.data.memes
    const length = memes.length
    const index = Math.floor(Math.random() * length)
    return memes[index]
  }
  // console.log(data)
  return (
    <MemeContext.Provider value={[getRamdomImage, meme, setMeme]}>
      <div className='container'>
        <Header />
        <Main />
      </div>
    </MemeContext.Provider>
  )
}
