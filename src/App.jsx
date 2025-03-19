import './App.css'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <div className='flex justify-center max-w-[1280px] flex-col'>
      <HeroSection/>
      <div className='h-[200vh] bg-blue-100 w-100%'>hola mundo</div>
    </div>
  )
}

export default App
