import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import configureStore from './configureStore'
import App from './containers/App'
import Posts from './containers/posts'
import SampleForm from './containers/dummyForm'
import './index.css'

const store = configureStore()

const topnav = {
  height: '80px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center'
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <div className="topnav">
          <NavLink to="/" exact>
            Posts
          </NavLink>
          <NavLink to="/form" exact>
            Form
          </NavLink>
        </div>
        <Switch>  
          <Route path="/" component={Posts} exact/>
          <Route path="/form" component={SampleForm} exact/>
          
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.app')
)
