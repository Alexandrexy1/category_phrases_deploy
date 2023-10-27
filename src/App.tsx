/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [msg, setMsg] = useState('');
  const allPhrases = [
    {
      id: 1,
      name: 'Motivação',
      phrases: [
        'Acredite em si mesmo, você é mais forte do que pensa.',
        'A persistência leva à excelência.',
        'Nunca é tarde demais para ser o que você poderia ter sido.',
        'Sonhe grande, trabalhe duro, permaneça focado.',
        'Seja a mudança que você deseja ver no mundo.'
      ]
    },
    {
      id: 2,
      name: 'Bom dia',
      phrases: [
        'Bom dia! Aproveite cada novo amanhecer como uma oportunidade.',
        'Que seu dia seja tão radiante quanto o sol que nasce.',
        'Comece o dia com um sorriso e faça dele incrível.',
        'Bom dia! Faça cada minuto contar hoje.',
        'Amanheceu, é hora de brilhar!'
      ]
    }
  ]

  function phraseGenerator() {
    const randomPhrase = Math.floor(Math.random() * allPhrases[selectedCategory].phrases.length)
    setMsg(`"${allPhrases[selectedCategory].phrases[randomPhrase]}"`)
  } 

  function handleSwitchCategory(index: number) {
    setSelectedCategory(index);
  }

  return (
    <>
      <main className='container'>
        <div>
          <img src={logo} alt="logotipo dev frases" className='logotipo'/>
        </div>
        <h1 className='title'>Categorias</h1>
        <section className='category-section'>
          {allPhrases.map((item, index) => (
            <button key={item.id}
              className='category-btn'
              style={{ 
                borderWidth: item.name === allPhrases[selectedCategory].name ? 2 : 0,
                borderColor: "#1fa4db"
              }}
              onClick={() => handleSwitchCategory(index)}
              >
              {item.name}
            </button>
          ))
          }
        </section>
        <button className='generate-phrase' onClick={phraseGenerator}>Gerar frase</button>
      </main>
      { msg !== '' && (
        <section className='message'>
          <p>{msg}</p>
        </section>
      )}

    </>
  )
}


