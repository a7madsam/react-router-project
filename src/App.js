import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProductSharedLayout from "./pages/ProductSharedLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* index: mean that path = {the same as the path of outer Route [match the parent]} 
            <Route path="/" ~ index element={<SharedLayout />}> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductSharedLayout />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        {/**
         * if the user type wrong url[dose not exist] this page will appear
         * => * : mean any url expect the once exist
         */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
