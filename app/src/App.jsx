import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicWrapper from "./layouts/publicSpace/PublicWrapper";
import PublicSpace from "./layouts/PublicSpace";
import SchoolSpace from "./layouts/SchoolSpace";
import StudentSpace from "./layouts/StudentSpace";
import HomePage from "./layouts/HomePage";
import AboutUs from "./layouts/AboutUs";
import Contact from "./layouts/Contact";


function App() {
  return (
    <Router>
      <PublicWrapper>
        <Routes>
          <Route path="/" element={<PublicSpace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/school" element={<SchoolSpace />} />
          <Route path="/student" element={<StudentSpace />} />
        </Routes>
      </PublicWrapper>
    </Router>
  );
}

export default App;
