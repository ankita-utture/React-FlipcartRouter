import Home from "./pages/Home";
import Describe from "./pages/Describe";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Describe />} />
      </Routes>
    </>
  );
}

export default App;