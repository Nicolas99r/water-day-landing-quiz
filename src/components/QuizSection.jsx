import React, { useState } from 'react';
import backgroundsvg from '../assets/ooorganize.svg'
/* import backgroundsvg2 from '../assets/Moon.svg' */
import wavessvg from '../assets/waves2.png'

const questions = [
  {
    question: "¿Cuál de estas situaciones gasta más agua en el día a día sin que lo notes?",
    options: [
      { text: "Dejar una fuga de grifo goteando todo el día", value: 2, feedback: "Sobretodo con ese goteo tan estresante 🫠" },
      { text: "Bañarte en menos de 5 minutos pero con la regadera abierta todo el tiempo", value: 3, feedback: "Apenas para ocultar tus lágrimas bajo la ducha 😭" },
      { text: "Lavar los platos con la llave abierta, una vez al día", value: 1, feedback: "Lavar platos? Usa desechables. ¡Arriba los microplásticos! 🥵" }
    ]
  },
  {
    question: "¿Qué método de lavado de ropa ahorra más agua?",
    options: [
      { text: "Usar la lavadora en carga completa con agua fría", value: 3, feedback: "Deja que se llene el cesto de la ropa sucia, no importa si ya huele toda la casa" },
      { text: "Lavar a mano en un balde enjuagando cada prenda individualmente", value: 1, feedback: "En serio respondiste esta? Saludos a la familia, abuelita" },
      { text: "Usar la lavadora con ciclos cortos, aunque sea media carga", value: 2, feedback: "Media? 🍻" }
    ]
  },
  {
    question: "¿Cuál es la forma más eficiente de lavar tu carro o moto sin derrochar agua?",
    options: [
      { text: "Usar un balde con agua y esponja", value: 3, feedback: "Concurso de camisetas mojadas a la orden" },
      { text: "Usar la manguera a presión todo el tiempo", value: 1, feedback: "🥵" },
      { text: "Llevarlo a un autolavado ecológico", value: 2, feedback: "Uhlala señor francés" }
    ]
  },
  {
    question: "¿Qué electrodoméstico usa más agua en casa?",
    options: [
      { text: "La ducha", value: 2, feedback: "Excepto los días de racionamiento" },
      { text: "El inodoro", value: 3, feedback: "El inodoro es un electrodoméstico? 👀" },
      { text: "La lavadora", value: 1, feedback: "Es más eficiente que tu en tu trabajo" }
    ]
  },
  {
    question: "¿Cuántos litros de agua puedes ahorrar al cerrar la llave mientras te lavas los dientes?",
    options: [
      { text: "Menos de 2 litros, no es tanto", value: 1, feedback: "¿o si...?" },
      { text: "Entre 5 y 10 litros en total", value: 2, feedback: "Chiqui chiqui chiqui chi" },
      { text: "Más de 10 litros por minuto", value: 3, feedback: "Con esto llenamos Chingaza" }
    ]
  },
  {
    question: "¿Cuál de estas acciones es un mito sobre el ahorro de agua?",
    options: [
      { text: "Poner una botella llena de agua dentro del tanque del inodoro para reducir el gasto por descarga", value: 2, feedback: "Arquímedes estaría orgulloso" },
      { text: "Usar la lavadora con agua caliente ahorra más agua porque limpia mejor", value: 3, feedback: "Para que no le de frío a la ropita" },
      { text: "Bañarse con agua fría gasta menos agua que con agua caliente", value: 1, feedback: "Porque sales más rápido de la ducha" }
    ]
  },
  {
    question: "Si toda el agua de la Tierra cupiera en un balde grande, ¿cuánto de esa agua sería potable?",
    options: [
      { text: "Menos de una cucharadita", value: 3, feedback: "Yo digo que menos" },
      { text: "Una taza pequeña", value: 2, feedback: "🤌" },
      { text: "Un vaso grande", value: 1, feedback: "Amaneciste optimista, no?" }
    ]
  },
  
];

const getResult = (score) => {
  if (score >= 20) return /* "🌟 Maestro del Agua (Nivel Experto): Eres un verdadero guardián del agua. Cada gota cuenta y tú lo sabes. El planeta te aplaude por tus hábitos sostenibles. Tip: ¡Sigue siendo un ejemplo! Motiva a otros a cuidar el agua como tú." */(
    <div>
      <h2>Maestro del Agua</h2>
    </div>
  );
  if (score >= 17) return "💧 Defensor Azul (Nivel Avanzado): Lo haces muy bien, pero siempre hay espacio para mejorar. Pequeñas acciones extra pueden llevarte al siguiente nivel. Tip: Prueba recolectar agua de lluvia o revisar fugas en casa.";
  if (score >= 14) return /* "⚠️ Eco-Aprendiz (Nivel Intermedio): Tienes buenos hábitos, pero puedes hacer más. Tienes buenas intenciones, pero a veces el agua se te escapa de las manos. Con unos pequeños cambios, ¡puedes hacer una gran diferencia! Tip: Reduce tu tiempo en la ducha y usa menos agua al lavar los platos." */(
    <div className='flex justify-center flex-col items-center'>
      <h2 className='text-[#83E8F1] font-extrabold text-6xl'>Eco-Aprendiz</h2>
      <p className='text-lg text-[#10635F]'>(Nivel Intermedio)</p>
      <p className='font-normal text-xl'>Tienes buenos hábitos, pero puedes hacer más. Tienes buenas intenciones, pero a veces el agua se te escapa de las manos. Con unos pequeños cambios, ¡puedes hacer una gran diferencia!</p>
      <div className='m-8 bg-[] rounded-lg border-2 p-4 max-w-lg ease-in-out transition-all hover:scale-[1.05] hover:rotate-1 bg-[#CBFBF7] text-black border-amber-50'>
        <p className='text-4xl'>Tip</p>
        <p className='font-normal'>Reduce tu tiempo en la ducha y usa menos agua al lavar los platos.</p>
      </div>
    </div>
  );
  if (score >= 10) return "🚨 Usuario en Alerta (Nivel Básico): Sabes que el agua es importante, pero algunos de tus hábitos podrían estar desperdiciándola. ¡Es hora de mejorar! Tip: Cierra la llave mientras te cepillas los dientes y repara fugas de inmediato.";
  if (score >= 6) return "🚨 UDesperdiciador en Rehabilitación (Nivel Crítico): Ups… parece que el agua fluye más rápido en tu casa que en un río. Pero nunca es tarde para mejorar y volverte un protector del agua. Tip: Empieza con un cambio pequeño, como lavar ropa solo cuando haya carga completa.";
  return "❌ Tsunami del Gasto (Nivel Emergencia): Si el agua tuviera sentimientos, estaría llorando por tu consumo. ¡Pero hay esperanza! Es momento de hacer un cambio radical. Tip: Aplica la regla de los 5 minutos en la ducha y cierra la llave siempre que no la uses.";
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value, feedback) => {
    setScore(score + value);
    setSelectedFeedback(feedback);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedFeedback(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div 
      className='h-[100vh] flex justify-center items-center bg-[#178F89] relative'
      style={{
        backgroundImage: `url(${wavessvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
      }}
    >
        <div 
          className="p-10 mx-auto backdrop-blur-3xl shadow-lg rounded-xl text-center h-[80%] w-[80%] flex justify-center items-center"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            backdropFilter: "blur(11px)",
            WebkitBackdropFilter: "blur(11px)", // Soporte para Safari
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
        >
        {finished ? (
            <h2 className="text-2xl font-bold text-white">{getResult(score)}</h2>
        ) : (
            <div 
              className='max-w-[600px]'
            >
            <h2 className="text-2xl font-bold mb-8">{questions[currentQuestion].question}</h2>
            <div className=" text-xl flex flex-col gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                <button
                    key={index}
                    className="min-h-20 bg-white text-[#0B4F4C] p-8 rounded-lg shadow-lg hover:bg-[#106260] hover:text-white text-left ease-in-out transition-all cursor-pointer"
                    onClick={() => handleAnswer(option.value, option.feedback)}
                >
                    {option.text}
                </button>
                ))}
            </div>
            {selectedFeedback && 
              <div
                className='absolute bottom-0 left-0 h-full w-full flex justify-center items-center rounded-2xl flex-col'
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)'
                }}
              >
                <p className="text-2xl mt-4 font-semibold text-black bg-white rounded-2xl shadow-2xl p-10">
                  {selectedFeedback}
                </p>
                <button
                  className="mt-4 bg-[#0B4F4C] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#106260] transition group relative inline-flex h-12 items-center justify-center overflow-hidden border border-neutral-200 font-medium duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]"
                  onClick={handleNextQuestion}
                >
                  Continuar
                </button>
              </div>
            }
            </div>
        )}
        </div>
    </div>
  );
}

export default Quiz;
