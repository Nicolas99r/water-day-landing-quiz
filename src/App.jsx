import './App.css'
import DescriptionSection from './components/DescriptionSection'
import HeroSection from './components/HeroSection'
import Quiz from './components/QuizSection'

function App() {

  return (
    <div className='flex justify-center max-w-[1280px] flex-col'>
      <HeroSection/>
      <DescriptionSection/>
      <Quiz/>
    </div>
  )
}

export default App
