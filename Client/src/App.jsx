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
import Contact from "./components/componentForm"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
