import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Eclass = lazy(() => import("./pages/Eclass"));
const Udrims = lazy(() => import("./pages/Udrims"));
const Certpia = lazy(() => import("./components/Certpia/Certpia"));
const QrInfo = lazy(() => import("./components/Certpia/QrInfo"));
const Bookmark = lazy(() => import("./components/Bookmark"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eclass" element={<Eclass />} />
            <Route path="/udrims" element={<Udrims />} />
            <Route path="/certpia" element={<Certpia />} />
            <Route path="/certpia/:id" element={<QrInfo />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
