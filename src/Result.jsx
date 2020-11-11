import React, { useState } from 'react'
import SubmitButton from './components/SubmitButton'

import Scales from './Scales'
import Sequences from './Sequences'

import './styles/Result.scss'

const Result = ({ chord, acident, terca }) => {

  const [ musicVerse, setMusicVerse ] = useState([])
  const [ musicChorus, setMusicChorus ] = useState([])

  const getRandomChord = () => {  // Gerar chord aleatório (nem sempre)
    const keys = [] // Criar array de chaves do objeto
    for (let chord in Scales) {
      keys.push(chord) // Alimentar essa array
    }
    const randomPosition = parseInt(Math.random() * (25 - 1) + 1) // Aleatório entre 1 e 24
    return keys[randomPosition] // Definir chord aleatório
  }

  const getScale = chord => {  // Receber chord e converter na escala
    let scale // Criação da escala para a música
    Object.entries(Scales).forEach( ([key, value]) => { // For nas entradas do objeto
      if (chord == key) {
        scale = value // Quando o chord escolhido for igual à key, scale recebe o value
      }
    })
    return scale
  }

  const getRandomSequence = () => {  // Gerar random para sequence
    const total = Sequences.length // Pegar quantidade total de sequencias já criadas
    const randomPosition = parseInt(Math.random() * total) // Aleatório entre 1 e total de sequencias
    return Sequences[randomPosition]
  }

  // FUNÇÃO PRINCIPAL!!! Pegar chords de acordo com a sequence
  const getChords = (chord) => {
    if (chord == 'random') {
      chord = getRandomChord() // Gerar nota aleatória se necessário
    }
    const scale = getScale(chord)
    const sequence = getRandomSequence()
    
    sequence.verse.forEach(position => {
      musicVerse.push(scale[position - 1])
    })
    
    sequence.chorus.forEach(position => {
      musicChorus.push(scale[position - 1])
    })
  }

  getChords(chord)

  // Apresentar resultados

  return (
    <React.Fragment>
      <div className='result'>

        <header><h2>Os acordes da sua nova música são:</h2></header>

        <div className='chords'>

          <div className="verse">
            <h3>Notas do verso</h3>
            <p>{ musicVerse }</p>
          </div>

          <div className="chorus">
            <h3>Notas do refrão</h3>
            <p>{ musicChorus }</p>
          </div>

        </div>
      </div>

      <SubmitButton
        url={'/'}
        text='Gerar nova sequência de acordess...'
        backgroundColor='blue' />
    </React.Fragment>
  )
}

export default Result