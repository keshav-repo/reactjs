import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";
import NoPageFound from "./component/NoPageFound";
import AboutUs from "./component/AboutUs";
import { Link } from "react-router-dom";
import CourseDetails from "./component/CourseDetails";

function App() {
  const courses = ["JavaScript", "React", "HTML", "DSA"];
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <h1>Dynamic Routing with React</h1>
        <ul>
          {courses.map((course) => {
            return (
              <li key={course}>
                <Link to={`courses/${course}`}>{course}</Link>
              </li>
            );
          })}
        </ul>
        <Routes>
          <Route path="courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
