import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/facebook-clone/profile" component={Profile} />
          <Route path="/facebook-clone/messages" component={Messages} />
          <Route path="/facebook-clone/news" component={Messages} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
