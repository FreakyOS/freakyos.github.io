import React from "react";
import { Spinner, Row } from "reactstrap";
const DownloadPage = React.lazy(() => import('./Pages/Download'));

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
  return (
    <React.Suspense fallback={<Loading />}>
      <Row className="d-flex justify-content-center">
        Downloads<br></br><br></br>
      </Row>
      <Row>
        <DownloadPage />
      </Row>
    </React.Suspense>
  );
}

export default App;
