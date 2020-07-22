import React from "react";
import { Spinner, Row } from "reactstrap";
import ReactGA from 'react-ga';
const DownloadPage = React.lazy(() => import('./Pages/Download'));


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
      <Row className="d-flex align-items-center justify-content-center">
        <h1>
          Downloads<br></br><br></br>
        </h1>
      </Row>
      <Row className="d-flex align-items-center justify-content-center">
        <DownloadPage />
      </Row>
    </React.Suspense>
  );
}

export default App;
