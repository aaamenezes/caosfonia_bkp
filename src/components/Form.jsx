import React, { useEffect } from 'react'
import SubmitButton from './SubmitButton'

import '../styles/Form.scss'

const Form = ({ chord, setChord, acident, setAcident, terca, setTerca }) => {

  const auxChord = event => {
    setChord(event.target.value)
    console.log(chord)
  }

  const auxAcident = event => {
    setAcident(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }
  
  const auxTerca = event => {
    setTerca(event.target.previousSibling.value)
    event.target.previousSibling.checked = true
  }

  return (
    <React.Fragment>
      <div className='tom'>

        <header><h2>Qual será o acorde tom da sua música?</h2></header>

        <div className="input-group">

          <select name='chord' onChangeCapture={event => {auxChord(event)}}>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="random">Aleatório</option>
          </select>

          <div className='group-radio'>
            <input type="radio" name="acident" value='none' defaultChecked />
            <div className='button' onClick={event => auxAcident(event)}> </div>
            <input type="radio" name="acident" value='sustenido' />
            <div className='button' onClick={event => auxAcident(event)}>#</div>
            <input type="radio" name="acident" value='bemol' />
            <div className='button' onClick={event => auxAcident(event)}>b</div>
          </div>

          <div className='group-radio'>
            <input type="radio" name="terca" value='major' defaultChecked />
            <div className='button' onClick={event => auxTerca(event)}>M</div>
            <input type="radio" name="terca" value='minor' />
            <div className='button' onClick={event => auxTerca(event)}>m</div>
          </div>
        </div>
      </div>

      <SubmitButton url={'/result'} text='Criar sequência de acordes para a minha música!' backgroundColor='pink' />

    </React.Fragment>
  )
}

export default Form