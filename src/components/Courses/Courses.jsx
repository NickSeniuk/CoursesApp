import { useState } from "react";
import CourseCard from "../Courses/components/CoursesCard/CoursesCard.jsx";
import CourseInfo from "../CourseInfo/CourseInfo.jsx";
import SearchBar from "../Courses/components/SearchBar/SearchBar.jsx";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList.jsx";
import Button from "../../common/Button.jsx";
import "../Courses/coursesStyles.css";

function Courses({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowCourse = (course) => {
    setSelectedCourse(course);
    console.log("Button is Clicked");
  };

  const handleBackClick = () => {
    setSelectedCourse(null);
  };
  return (
    <div className="courses">
      {selectedCourse ? (
        <CourseInfo course={selectedCourse} onBack={handleBackClick} />
      ) : courses.length > 0 ? (
        <>
          <div className="searchBlock">
            <SearchBar />
            <Button buttonText="Add New Course" />
          </div>
          {courses.map((course) => (
            <div>
              <CourseCard course={course} onShowCourse={handleShowCourse} />
            </div>
          ))}
        </>
      ) : (
        <EmptyCourseList />
      )}
    </div>
  );
}

export default Courses;
