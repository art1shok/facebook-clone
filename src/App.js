import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/facebook-clone/profile" exact component={Profile} />
          <Route path="/facebook-clone" component={LoginPage} />
          <Route path="/facebook-clone/messages" component={Messages} />
          <Route path="/facebook-clone/news" component={Messages} />
          <Redirect from="*" to="/facebook-clone" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
