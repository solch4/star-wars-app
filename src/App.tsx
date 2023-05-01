import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";

const Films = lazy(() => import("./pages/Films"));
const Characters = lazy(() => import("./pages/Characters"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/:filmId" element={<Characters />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
