import Courses from "./components/Courses/Courses.jsx";
import Header from "./components/Header/Header.jsx";
import { mockedCoursesList } from "./constants.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Courses courses={mockedCoursesList} />
    </div>
  );
}

export default App;
