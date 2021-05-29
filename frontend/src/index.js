// Global
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// Components
import { store, history } from './redux/store'
import Home from './Pages/Home'
// Store
// Stylesheet
import '@clayui/css/lib/css/atlas.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
