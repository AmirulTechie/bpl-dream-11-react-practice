import './App.css'
import NavBar from './components/navBar/NavBar'
import Banner from './components/hompage/banner/Banner'
import Players from './components/hompage/Players/Players'
import { Suspense } from 'react'

const fetchPlayer = async() =>{
  const res = await fetch('/data.json')
  return res.json();
}
function App() {
  const playersPromise = fetchPlayer();
  return (
    <div className='container mx-auto'>
    <NavBar></NavBar>
    <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Players playersPromise = {playersPromise}></Players>
    </Suspense>
    </div>
  )
}

export default App
