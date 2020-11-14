import React, { useState, useEffect } from 'react'
import SubmitButton from './components/SubmitButton'

import './styles/Form.scss'

const Form = ({ chord, setChord, acident, setAcident, terca, setTerca }) => {

  // Serve para quando o usuário selecionar as notas E, B
  const [ sustenidoDisplay, setSustenidoDisplay ] = useState('flex')
  // Serve para quando o usuário selecionar as notas C, F
  const [ bemolDisplay, setBemolDisplay ] = useState('flex')
  
  // Serve para quando o usuário selecionar a nota random
  const [ groupRadioDisplay, setGroupRadioDisplay ] = useState('flex')
  const [ inputGroupJustifyContent, setInputGroupJustifyContent ] = useState('space-between')
  
  useEffect(() => {
    testSustenido()
    testBemol()
    testRandom()
  })

  const testSustenido = () => {
    if ( chord == 'E' || chord == 'B' ) {
      setSustenidoDisplay('none')
    } else {
      setSustenidoDisplay('flex')
    }
  }

  const testBemol = () => {
    if ( chord == 'C' || chord == 'F' ) {
      setBemolDisplay('none')
    } else {
      setBemolDisplay('flex')
    }
  }

  const testRandom = () => {
    if ( chord == 'random' ) {
      setGroupRadioDisplay('none')
      setInputGroupJustifyContent('center')
    } else {
      setGroupRadioDisplay('flex')
      setInputGroupJustifyContent('space-between')
    }
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

        <div className="input-group" style={{ justifyContent: inputGroupJustifyContent }}>

          <select name='chord' onChange={event => setChord(event.target.value)}>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="random">Aleatório</option>
          </select>

          <div className='group-radio' style={{ display: groupRadioDisplay }}>

            <input type="radio" name="acident" value='none' defaultChecked />
            <div className='button' onClick={event => auxAcident(event)}> </div>

            <input type="radio" name="acident" value='sustenido' />
            <div className='button' onClick={event => auxAcident(event)} style={{ display: sustenidoDisplay }}>#</div>

            <input type="radio" name="acident" value='bemol' />
            <div className='button' onClick={event => auxAcident(event)}style={{ display: bemolDisplay }}>b</div>
          </div>

          <div className='group-radio' style={{ display: groupRadioDisplay }}>
            <input type="radio" name="terca" value='major' defaultChecked />
            <div className='button' onClick={event => auxTerca(event)}>M</div>
            <input type="radio" name="terca" value='minor' />
            <div className='button' onClick={event => auxTerca(event)}>m</div>
          </div>
        </div>
      </div>

      <div className="preview">
        {chord} - {acident} - {terca}
      </div>

      <SubmitButton url={'/result'} text='Criar sequência de acordes para a minha música!' backgroundColor='pink' />

    </React.Fragment>
  )
}

export default Form