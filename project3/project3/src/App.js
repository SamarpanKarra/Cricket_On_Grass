
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/footer";
// import Home from "./Pages/Homepage";
// import About from "./Pages/About";
// import Service from "./Components/Services";
// import Contact from "./Components/Contact";
// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/"  element={<Home/>} />
//           <Route path="/about"  element={<About/>} />
//           <Route path="/services/:id" element={<Service/>}/>
//         </Routes>
// <Contact/>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Service from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<Service />} /> {/* Specify the parameter :id */}
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </>
  );
};

export default App;
