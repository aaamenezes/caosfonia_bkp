import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Form from './components/Form'
import Result from './Result';

import './styles/App.scss'

const App = () => {

  const [ chord, setChord ] = useState('C')
  const [ acident, setAcident ] = useState('none')
  const [ terca, setTerca ] = useState('major')

  return (
    <React.Fragment>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>

            <Route
              path="/"
              render={() => (
                <Form
                  chord={chord}
                  setChord={setChord}
                  acident={acident}
                  setAcident={setAcident}
                  terca={terca}
                  setTerca={setTerca} />
              )}
              exact />

            <Route
              path='/result'
              render={() => (
                <Result
                  chord={chord}
                  acident={acident}
                  terca={terca} />
              )} />

            <Route
              component={ () => <div>Erro 404! Arrebentou uma corda :/</div> } />
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App