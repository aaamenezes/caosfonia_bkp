import React, { useState } from 'react'
import SubmitButton from './components/SubmitButton'

import getRandomChord from './functions/getRandomChord'
import getRandomSequence from './functions/getRandomSequence'
import getScale from './functions/getScale'

import './styles/Result.scss'

const Result = ({ chord, acident, terca }) => {

  // Pegar chords da música de acordo com a sequence
  const getChords = (chord) => {

    if ( chord == 'random' ) { // Se chord veio como aleatório

      chord = getRandomChord() // Gerar nota aleatória

    } else if ( acident == 'sustenido' ) { // Senão, se o acident for sustenido

      chord += 's' // chord recebe um 's' no final
      if ( terca == 'minor') chord = chord + 'm' // Se a terca for menor, chord recebe um 'm'

    } else if ( acident == 'bemol' ) { // Senão, se o acident for bemol

      chord += 'b' // chord recebe um 'b' no final
      if ( terca == 'minor') chord = chord + 'm' // Se a terca for menor, chord recebe um 'm'
    }

    // Se a nota for bemol, substituir ela pela nota anterior em sustenido
    // Isso é preciso porque no scales.js as notas estão apenas em sustenido
    if ( chord[1] == 'b' ) {
      switch ( chord[0] ) {
        case 'D':
          chord = chord.replace('Db', 'Cs')
          break
        case 'G':
          chord = chord.replace('Gb', 'Fs')
          break
        case 'A':
          chord = chord.replace('Ab', 'Gs')
          break
        case 'E':
          chord = chord.replace('Eb', 'Ds')
          break
        case 'B':
          chord = chord.replace('Bb', 'As')
      }
    }

    const scale = getScale(chord)
    const sequence = getRandomSequence()
    
    console.log(chord)
    console.log('scale:', scale)
    console.log('sequence:', sequence)

    // Até aqui ta ok desde ontem
    
    let intro = []
    let verse1 = []
    let verse2 = []
    let prechorus = []
    let chorus = []
    let pass = []
    let final = []

    // sequence.intro.forEach(position => { // Preenche a array intro com as notas do verso
    //   intro.push(scale[position - 1])
    // })
    
    // sequence.verse1.forEach(position => { // Preenche a array verse1 com as notas do verso
    //   verse1.push(scale[position - 1])
    // })
    
    // sequence.verse2.forEach(position => { // Preenche a array verse2 com as notas do verso
    //   verse2.push(scale[position - 1])
    // })
    
    // sequence.prechorus.forEach(position => { // Preenche a array prechorus com as notas do verso
    //   prechorus.push(scale[position - 1])
    // })
    
    // sequence.chorus.forEach(position => { // Preenche a array chorus com as notas do refrão
    //   chorus.push(scale[position - 1])
    // })
    
    // sequence.pass.forEach(position => { // Preenche a array pass com as notas do verso
    //   pass.push(scale[position - 1])
    // })
    
    // sequence.final.forEach(position => { // Preenche a array final com as notas do verso
    //   final.push(scale[position - 1])
    // })

    // console.log(intro)
    // console.log(verse1)
    // console.log(verse2)
    // console.log(prechorus)
    // console.log(chorus)
    // console.log(pass)
    // console.log(final)
  }

  // Iniciar função ao carregar a página
  window.onload = getChords(chord)
  
  return (
    <React.Fragment>
      <div className='result'>

        <header><h2>Os acordes da sua nova música são:</h2></header>

        <div className='chords'>

          <div className="verse">
            <h3>Notas do verso</h3>
            {/* <p>{ verse1 }</p> */}
          </div>

          <div className="chorus">
            <h3>Notas do refrão</h3>
            {/* <p>{ chorus }</p> */}
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