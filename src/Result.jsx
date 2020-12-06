import React, { useState } from 'react'
import SubmitButton from './components/SubmitButton'

import getRandomChord from './functions/getRandomChord'
import getRandomMusic from './functions/getRandomMusic'
import getScale from './functions/getScale'

import './styles/Result.scss'

const Result = ({ chord, acident, terca }) => {

  let intro = []
  let verse1 = []
  let verse2 = []
  let prechorus = []
  let chorus = []
  let pass = []
  let final = []

  // Pegar chords da música de acordo com a sequence
  const getChords = (chord) => {

    if ( chord == 'random' ) { // Se chord veio como aleatório
      chord = getRandomChord() // Gerar nota aleatória
    } else if ( true ) {
      if ( acident == 'sustenido' ) { // Senão, se o acident for sustenido
        chord += 's' // chord recebe um 's' no final
      } else if ( acident == 'bemol' ) { // Senão, se o acident for bemol
        chord += 'b' // chord recebe um 'b' no final
      }
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
    const music = getRandomMusic()

    music.sequence.intro.forEach(position => {
      intro.push(scale[position - 1])
    })

    music.sequence.verse1.forEach(position => {
      verse1.push(scale[position - 1])
    })

    music.sequence.verse2.forEach(position => {
      verse2.push(scale[position - 1])
    })

    music.sequence.prechorus.forEach(position => {
      prechorus.push(scale[position - 1])
    })

    music.sequence.chorus.forEach(position => {
      chorus.push(scale[position - 1])
    })

    music.sequence.pass.forEach(position => {
      pass.push(scale[position - 1])
    })

    music.sequence.final.forEach(position => {
      final.push(scale[position - 1])
    })

    const print = (part) => {
      setTimeout(() => {
        return part
      }, 3000);
    }
  }
  
  // Iniciar função ao carregar a página
  window.addEventListener('load', getChords(chord))

  return (
    <React.Fragment>
      <div className='result'>

        <header><h2>Os acordes da sua nova música são:</h2></header>

        <div className='chords'>

          <div className="part">
            <h3>Introdução</h3>
            <div>{ intro }</div>
          </div>

          <div className="part">
            <h3>Verso 1</h3>
            <div>{ verse1 }</div>
          </div>

          <div className="part">
            <h3>Verso 2</h3>
            <div>{ verse2 }</div>
          </div>

          <div className="part">
            <h3>Pré-refrão</h3>
            <div>{ prechorus }</div>
          </div>

          <div className="part">
            <h3>Refrão</h3>
            <div>{ chorus }</div>
          </div>

          <div className="part">
            <h3>Passagem</h3>
            <div>{ pass }</div>
          </div>

          <div className="part">
            <h3>Final</h3>
            <div>{ final }</div>
          </div>

          <div className="sourc">
            <h4>A sua música foi inspirada em:</h4>
            <span className="music">Musica tal</span> do artista <span className="artist">Artista tal!</span>
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