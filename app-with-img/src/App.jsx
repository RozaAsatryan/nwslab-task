import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Category from "./pages/Category/Category";
import SingleImg from "./components/singleImg/SingleImg";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Category />} />
          <Route path="/img/:id" element={<SingleImg />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
