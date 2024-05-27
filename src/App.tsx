import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/states/Spinner";

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="mainApplicationLayout">
      <Router basename={import.meta.env.DEV ? "/" : "/eteration-study-case/"}>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
