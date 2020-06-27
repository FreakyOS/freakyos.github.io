import React from "react";
import { Spinner } from "reactstrap";
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
      <DownloadPage />
    </React.Suspense>
  );
}

export default App;
