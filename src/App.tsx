import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Films from "./pages/Films";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/:filmId/characters" element={<Characters />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
