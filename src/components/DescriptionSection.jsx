import React from 'react'
import backgroundsvg from '../assets/ooorganize.svg'

function DescriptionSection() {
  return (
    <div 
        className='h-[100vh] bg-[#178F89] w-[100%] flex flex-col justify-evenly p-20 pb-0 text-[#CBFBF7] max-sm:pl-2 max-sm:pr-2'
        style={{
            backgroundImage: `url(${backgroundsvg})`,
            backgroundRepeat: 'repeat'
        }}
    >
        <div 
            className='m-5 p-5 backdrop-blur-xs rounded-2xl shadow-2xl max-sm:m-2'
            style={{
                backgroundColor: 'rgba(203,251,247, 0.15)'
            }}
        >
            <h2 className='text-6xl font-bold m-4 text-[#043F3B] max-sm:m-2 max-sm:text-2xl'>💧 Cuidemos el Agua, Cuidemos el Planeta 🌍</h2>
            <p className='text-xl max-sm:text-lg'>El agua es uno de los recursos más valiosos de nuestro planeta, pero muchas veces la desperdiciamos sin darnos cuenta. Pequeñas acciones en nuestra vida diaria pueden marcar una gran diferencia en su conservación.</p>
        </div>
        <div 
            className='m-5 p-5 backdrop-blur-xs rounded-2xl shadow-2xl max-sm:m-2'
            style={{
                backgroundColor: 'rgba(203,251,247, 0.15)'
            }}
        >
            <h3 className='text-6xl font-bold m-4 text-[#043F3B] max-sm:m-2 max-sm:text-2xl'>💡 ¿Sabes cuánta agua consumes realmente?</h3>
            <p className='text-xl max-sm:text-lg'>Pon a prueba tus conocimientos con este quiz interactivo y descubre qué tan sostenible es tu consumo de agua. Responde cada pregunta y recibe consejos prácticos para mejorar tus hábitos.</p>
        </div>
        <div className='m-10 pt-5 animate-bounce bottom-0'>
            <p className='text-2xl'>🚀 ¡Acepta el reto y conviértete en un Maestro del Agua!</p>
            <p className='rotate-180 text-6xl'>^</p>
        </div>
    </div>
  )
}

export default DescriptionSection