import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";
import Button from "../../../../common/Button.jsx";
import getAuthorsNames from "../../../../helpers/getAuthorsNames.js";
import "../CoursesCard/coursesCardStyles.css";

function CourseCard({ course, onShowCourse }) {
  const { title, description, creationDate, duration, authors } = course;

  return (
    <div className="course-card">
      <div className="course-card-body">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="description">
          <p>Description: {description}</p>
        </div>
        <div className="another">
          <p>Duration: {getCourseDuration(duration)}</p>
          <p>Creation Date: {formatCreationDate(creationDate)}</p>
          <p>Authors: {getAuthorsNames(authors)}</p>
          <Button
            buttonText="Show Course"
            onClick={() => onShowCourse(course)}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
