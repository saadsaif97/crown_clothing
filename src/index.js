import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HomePage } from './pages/home-page/home-page.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop-page.component'
import Hats from './pages/shop/hats/hats-page.component'
import Jackets from './pages/shop/jackets/jackets-page.component'
import Men from './pages/shop/men/men-page.component'
import Women from './pages/shop/women/women-page.component'
import Sneakers from './pages/shop/sneakers/sneakers-page.component'
import Header from './components/header/header.component'
import SignInSignUp from './pages/signin-and-signup/signin-and-signup.component'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={Shop} />
        <Route exact={true} path='/signin' component={SignInSignUp} />
        <Route exact={true} path='/shop/hats' component={Hats} />
        <Route exact={true} path='/shop/jackets' component={Jackets} />
        <Route exact={true} path='/shop/mens' component={Men} />
        <Route exact={true} path='/shop/womens' component={Women} />
        <Route exact={true} path='/shop/sneakers' component={Sneakers} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
