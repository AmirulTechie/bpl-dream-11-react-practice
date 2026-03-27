import './App.css'
import NavBar from './components/navBar/NavBar'
import Banner from './components/hompage/banner/Banner'
import Players from './components/hompage/Players/Players'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
const fetchPlayer = async() =>{
  const res = await fetch('/data.json')
  return res.json();
}
function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(3000000);
  return (
    <div className='container mx-auto'>
    <NavBar coin = {coin}></NavBar>
    <Banner coin={coin} setCoin = {setCoin}></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Players coin={coin} setCoin={setCoin} playersPromise = {playersPromise}></Players>
    </Suspense>

    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
