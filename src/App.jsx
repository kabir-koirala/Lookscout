import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Test from "./components/test"
import React from "react";
import Header from "./components/header";
import Landing from "./components/landing"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/test" element={<Test/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
