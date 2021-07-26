import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { UserLogin } from './screens/Login/UserLogin';
import { UserRegister } from './screens/Register/UserRegister';
import  Layout  from './screens/Layout';
import Todos from './screens/Todos/Todos';
import { MyProfile } from './screens/Profile/MyProfile';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={UserLogin}/>
        <Route exact path="/register" component={UserRegister}/>
        <Route exact path="/home">
            <Layout>
              <Todos/>
            </Layout>
        </Route>
        <Route exact path="/home/myProfile">
            <Layout>
              <MyProfile/>
            </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
