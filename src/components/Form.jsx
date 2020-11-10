import React from 'react'
import SubmitButton from './SubmitButton'

import '../styles/Form.scss'

const Form = ({ chord, setChord, acident, setAcident, terca, setTerca }) => {

  const auxAcident = (e) => {
    e.target.previousSibling.checked = true
    setAcident(e.target.previousSibling.value)
  }
  
  const auxTerca = (e) => {
    e.target.previousSibling.checked = true
    setTerca(e.target.previousSibling.value)
  }

  return (
    <React.Fragment>
      <div className='tom'>

        <header><h2>Qual será o acorde tom da sua música?</h2></header>

        <div className="input-group">

          <select name='chord' onChange={e => {setChord(e.target.value)}} value={chord}>
            <option value="random">Aleatório</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>

          <div className='group-radio'>
            <input type="radio" name="acident" value='none' defaultChecked />
            <div className='button' onClick={e => auxAcident(e)}> </div>
            <input type="radio" name="acident" value='sustenido' />
            <div className='button' onClick={e => auxAcident(e)}>#</div>
            <input type="radio" name="acident" value='bemol' />
            <div className='button' onClick={e => auxAcident(e)}>b</div>
          </div>

          <div className='group-radio'>
            <input type="radio" name="terca" value='major' defaultChecked />
            <div className='button' onClick={e => auxTerca(e)}>M</div>
            <input type="radio" name="terca" value='minor' />
            <div className='button' onClick={e => auxTerca(e)}>m</div>
          </div>
        </div>
      </div>

      <SubmitButton url={'/result'} text='Criar sequência de acordes para a minha música!' backgroundColor='pink' />

    </React.Fragment>
  )
}

export default Form