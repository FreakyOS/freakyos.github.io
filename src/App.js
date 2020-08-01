import React from "react";
import { Spinner } from "reactstrap";
import ReactGA from 'react-ga';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
const DownloadPage = React.lazy(() => import('pages/Download'));
const HomePage = React.lazy(() => import('pages/Home'));
const Header = React.lazy(() => import('components/Header'));
const Footer = React.lazy(() => import('components/Footer'));
const LinksPage = React.lazy(() => import('pages/Link'));
// const TeamPage = React.lazy(() => import('pages/Team'));

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview('/homepage');
}

function Loading() {
  return (
    <React.Fragment>
      <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
        <Spinner type="grow" color="primary" />
      </div>
    </React.Fragment>
  );
};

function App() {
  initializeReactGA();
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <main role='main' className='w-100' style={{ paddingBottom: '60px' }}>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path="/downloads">
              <DownloadPage />
            </Route>
            <Route path="/links">
              <LinksPage />
            </Route>
            {/* <Route path="/team">
              <TeamPage />
            </Route> */}
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </React.Suspense>
  );
}

export default App;
