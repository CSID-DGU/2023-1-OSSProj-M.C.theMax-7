import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Udrims = lazy(() => import("./pages/Udrims"));
const Certpia = lazy(() => import("./components/Certpia/Certpia"));
const QrInfo = lazy(() => import("./components/Certpia/QrInfo"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/udrims" element={<Udrims />} />
            <Route path="/certpia" element={<Certpia />} />
            <Route path="/certpia/:id" element={<QrInfo />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
