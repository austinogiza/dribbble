import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Restore from './components/Restore'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
  
  <React.Fragment>
<Router>
<GlobalStyle/>

<Restore/>
  <Switch>
      <Route exact component={Home} path="/" />
    </Switch>
</Router>


  </React.Fragment>
  )
}

export default App
