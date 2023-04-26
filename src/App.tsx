import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Films from "./pages/Films";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/:filmId/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
