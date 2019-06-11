import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Hospedaje from './HospedajeComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  render(){
    return(
      <div>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route path='/menu' component={Home} />
              <Route path='/actividades' component={Home} />
              <Route path='/reservas' component={Hospedaje} />
              <Route path='/galeria' component={Home} />
              <Route path='/contacto' component={Home} />
          </Switch>
        </div>
      </div>
    );

  }

}

export default withRouter(Main);
