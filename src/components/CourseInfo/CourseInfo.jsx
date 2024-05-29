import Button from "../../common/Button.jsx";
import formatCreationDate from "../../helpers/formatCreationDate.js";
import getAuthorsNames from "../../helpers/getAuthorsNames.js";
import getCourseDuration from "../../helpers/getCourseDuration.js";

function CourseInfo({ course, onBack }) {
  const { id, title, description, creationDate, duration, authors } = course;

  return (
    <div className="course-info">
      <h2>Course Information</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Duration: {getCourseDuration(duration)}</p>
      <p>Creation Date: {formatCreationDate(creationDate)}</p>
      <p>Authors: {getAuthorsNames(authors)}</p>
      <Button buttonText="Back" onClick={onBack} />
    </div>
  );
}

export default CourseInfo;
