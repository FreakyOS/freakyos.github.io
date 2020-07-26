import React from "react";
import { Spinner } from "reactstrap";
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const DownloadPage = React.lazy(() => import('pages/Download'));
const HomePage = React.lazy(() => import('pages/Home'));
const Header = React.lazy(() => import('components/Header'));
const Footer = React.lazy(() => import('components/Footer'));

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview('/homepage');
}

function Loading() {
  return (
    <React.Fragment>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
    </React.Fragment>
  );
};

function App() {
  initializeReactGA();
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Router>
        <Switch>
          <Route path="/downloads">
            <DownloadPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Suspense>
  );
}

export default App;
