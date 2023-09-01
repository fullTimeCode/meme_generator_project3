import Header from './components/Header'
import Main from './components/Main'
import data from './assets/data/memesdata'
import { MemeContext } from './Context'

export default function App() {
  function getRamdomImage() {
    const memes = data.data.memes
    const length = memes.length
    const index = Math.floor(Math.random() * length)
    return memes[index]
  }
  // console.log(data)
  return (
    <MemeContext.Provider value={getRamdomImage}>
      <div className='container'>
        <Header />
        <Main />
      </div>
    </MemeContext.Provider>
  )
}
