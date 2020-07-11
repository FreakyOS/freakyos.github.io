import React from "react";
import { Spinner, Row, Col } from "reactstrap";
const DownloadPage = React.lazy(() => import('./Components/MobileCard'));

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
      <Row className="d-flex align-items-center justify-content-center">
        <h1>
          Download
        </h1>        
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md="5">
          <DownloadPage />
        </Col>
      </Row>
    </React.Suspense>
  );
}

export default App;
