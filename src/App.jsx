import Home from "./pages/home";
import Describe from "./pages/describe";
import { Route , Routes } from "react-router";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:id" element={<Describe />}></Route>

      </Routes>
    </>
  )
}

export default App
