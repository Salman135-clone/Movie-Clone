import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Signing from "./pages/Signing";
import Favorite from "./pages/Favorite";
import { CreatingProvider } from "./context/FavoritesContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <CreatingProvider>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Signing />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </BrowserRouter>
      </CreatingProvider>
    </>
  );
}

export default App;
