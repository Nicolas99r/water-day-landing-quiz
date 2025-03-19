import React, { useEffect, useState } from 'react'
import bgPara from '../assets/backgroundParallax.webp'
import stars from '../assets/stars.webp'
import moon from '../assets/moon.webp'
import water from '../assets/water.webp'
import leftbackmount from '../assets/leftbackmount.webp'
import rightbackmount from '../assets/rightbackmount.webp'
import leftfrontmount from '../assets/leftfrontmount.webp'
import leftfrontreflex from '../assets/leftfrontreflex.png'
import rightfrontmount from '../assets/rightfrontmount.webp'
import lefttrees from '../assets/lefttrees.webp'
import righttrees from '../assets/righttrees.webp'
import leftrockfront1 from '../assets/frontrockleft 2.webp'
import rightrockfront1 from '../assets/frontrockright2.webp'

function HeroSection() {

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 1.5;

      if(scrollTop < maxScroll){
        setScrollProgress(scrollTop / maxScroll);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => window.removeEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <div className={`relative flex justify-center items-center overflow-hidden h-screen transition-all duration-500 ${isSticky ? 'sticky top-0' : ''}`}>
      {/* FONDO */}
        <img src={bgPara} alt="background hero section" className='h-lvh max-h-[1000px]'/>
        {/* ESTRELLAS */}
        <img src={stars} alt="stars" className='absolute left-0 top-0'/>
        {/* LUNA */}
        <img 
          src={moon} 
          alt='moon' 
          className='absolute w-[134px] top-90 '
          style={{
            transform: `translate(${scrollProgress * 500}px, ${scrollProgress * -500}px)`
          }}
        />
        <h1 
          className='absolute text-8xl text-cyan-950 font-extrabold'
          style={{
            transform: `translateY(${scrollProgress * -500}px)`
          }}
        >
          DÍA DEL AGUA
        </h1>
        {/* AGUA */}
        <img src={water} alt='water' className='absolute max-h-[50vh] max-w-[1500px] bottom-0'/>
        {/* MONTAÑAS DE ATRÁS IZQUIERDA */}
        <div>
          <img 
            src={leftbackmount} 
            alt='Left Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[45%] right-[40%]'
            style={{
              transform: `translateX(${scrollProgress * -50}px)`
            }}
          />
          <img 
            src={leftbackmount} 
            alt='Left Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[18%] right-[40%] scale-y-[-1] opacity-45'
            style={{
              transform: `translateX(${scrollProgress * -50}px)`
            }}
          />
        </div>
        {/* MONTAÑAS DE ATRÁS DERECHA */}
        <div>
          <img 
            src={rightbackmount} 
            alt='right Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[45%] left-[40%]'
            style={{
              transform: `translateX(${scrollProgress * 50}px)`
            }}
          />
          <img 
            src={rightbackmount} 
            alt='right Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[25%] left-[40%] scale-y-[-1] opacity-45'
            style={{
              transform: `translateX(${scrollProgress * 50}px)`
            }}
          />
        </div>
        {/* MONTAÑAS DE ADELANTE IZQUIERDA */}
        <div>
          <img 
            src={leftfrontmount} 
            alt='right Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[45%] left-[-10%]'
            style={{
              transform: `translateX(${scrollProgress * -100}px)`
            }}
          />
          <img 
            src={leftfrontreflex} 
            alt='right Back Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[22%] left-[-10%]'
            style={{
              transform: `translateX(${scrollProgress * -100}px)`
            }}
          />
        </div>
        {/* MONTAÑAS DE ADELANTE DERECHA */}
        <div>
          <img 
            src={rightfrontmount} 
            alt='right front Mount reflex' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[20%] right-[-10%] scale-y-[-1] saturate-[20%] opacity-80 brightness-150'
            style={{
              transform: `translateX(${scrollProgress * 100}px)`
            }}
          />
          <img 
            src={rightfrontmount} 
            alt='right front Mount' 
            className='absolute max-h-[50vh] max-w-[1500px] bottom-[45%] right-[-10%]'
            style={{
              transform: `translateX(${scrollProgress * 100}px)`
            }}
          />
        </div>
        {/* ÁRBOLES IZQUIERDA */}
        <div>
          <img 
            src={lefttrees} 
            alt='left trees'
            className='absolute max-h-[50vh] max-w-[1410px] bottom-[25%] left-[-10%] scale-y-[-1] saturate-50 brightness-150 opacity-80'
            style={{
              transform: `translateX(${scrollProgress * -200}px)`
            }}
          />
          <img 
            src={lefttrees} 
            alt='left trees'
            className='absolute max-h-[50vh] max-w-[1410px] bottom-[42%] left-[-10%]'
            style={{
              transform: `translateX(${scrollProgress * -200}px)`
            }}
          />
        </div>
        {/* ÁRBOLES DERECHA */}
        <div>
          <img 
            src={righttrees} 
            alt='right trees'
            className='absolute max-h-[50vh] max-w-[924px] bottom-[8%] right-[-10%] scale-y-[-1] saturate-50 brightness-150 opacity-80'
            style={{
              transform: `translateX(${scrollProgress * 300}px)`
            }}
          />
          <img 
            src={righttrees} 
            alt='right trees reflex'
            className='absolute max-h-[50vh] max-w-[924px] bottom-[30%] right-[-10%]'
            style={{
              transform: `translateX(${scrollProgress * 300}px)`
            }}
          />
        </div>
        <img src={leftrockfront1} className='absolute max-h-[50vh] max-w-[924px] bottom-[-2%] left-[-10%]'/>
        <img src={rightrockfront1} className='absolute max-h-[50vh] max-w-[924px] bottom-[-5%] right-[-10%]'/>
    </div>
  )
}

export default HeroSection