import React, { useState } from 'react'
import SubmitButton from './components/SubmitButton'

import getRandomChord from './functions/getRandomChord'
import getRandomSequence from './functions/getRandomSequence'
import getScale from './functions/getScale'

import './styles/Result.scss'

const Result = ({ chord, acident, terca }) => {

  // Pegar chords da música de acordo com a sequence
  const getChords = (chord) => {
    if (chord == 'random') {
      chord = getRandomChord() // Gerar nota aleatória se necessário
    }
  
    const scale = getScale(chord)
    const sequence = getRandomSequence()
    
    let musicVerse = []
    let musicChorus = []
    
    sequence.verse.forEach(position => { // Preenche a array musicVerse com as notas do verso
      musicVerse.push(scale[position - 1])
    })
    
    sequence.chorus.forEach(position => { // Preenche a array musicChorus com as notas do refrão
      musicChorus.push(scale[position - 1])
    })

    console.log(musicVerse)
    console.log(musicChorus)
  }
  
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
            {/* <p>{ musicChorus }</p> */}
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